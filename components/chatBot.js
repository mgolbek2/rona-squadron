import React, { useState, useCallback, useEffect }  from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { getStateForKey } from "react-native-redux"
import * as _ from 'lodash'

const ChatPage = ({}) => {
    let num = 0;
    const [messages, setMessages] = useState([]);
    let botUrl = getStateForKey("botUrl");
    let json;

    useEffect(() => {
        setMessages([])
    }, [])

    const getToken = async () => {
        if (this.json) {
            return;
        }
        try {
            let response = await fetch(
                'https://directline.botframework.com/v3/directline/conversations',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ktHIMNJud1k.A2ZFBRkCxx_G2JeLNYp4e5WlS4BiL5HiU5nOABHvogk'
                    }
                })
            let json = await response.json();
            this.json = json;
            return;
        } catch (error) {
            console.error(error);
        }
    }

    const sendMessageToBot = async (message) => {
        try {
            let response = await fetch(
                'https://directline.botframework.com/v3/directline/conversations/' + this.json.conversationId + '/activities',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + this.json.token
                    },
                    body: JSON.stringify({
                        "locale": "en-EN",
                        "type": "message",
                        "from": {
                            "id": "user1"
                        },
                        "text": message
                    })
                })
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    }

    const getMessages = async () => {
        try {
            let response = await fetch(
                'https://directline.botframework.com/v3/directline/conversations/' + this.json.conversationId + '/activities',
                {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + this.json.token
                    }
                })
            let json = await response.json();
            return json.activities;
        } catch (error) {
            console.error(error);
        }
    }

    const formatMessage = (message) => {
        let userId = 1;
        if (message.from.id == 'humana-hackathon-cov-bot-id') {
            userId = 2;
        }
        let formattedMessage = {
            '_id': this.num,
            text: message.text,
            createdAt: new Date(message.timestamp),
            user: {
                '_id': userId
            }
        }
         this.num++;
         return formattedMessage;
    }

    const formatConversation = (conversation) => {
        conversation = _.drop(conversation);
        this.num = 0;
        return _.sortBy(conversation.map((message) => formatMessage(message)), (message) => {message.timestamp}).reverse();
    }

    const sendMessage = async (message) => {
        await getToken();
        await sendMessageToBot(message);
        let conversation = await getMessages();
        let formattedConversation = formatConversation(conversation);
        setMessages(previousMessages => GiftedChat.append([], formattedConversation))
    }

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        sendMessage(messages[0].text)
    }, [])


    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1
            }}
            renderBubble={props => {
                return (
                  <Bubble
                    {...props}
                    wrapperStyle={{
                      left: {
                        backgroundColor: '#fff',
                      },
                      right: {
                          backgroundColor: '#4a7729',
                        },
                    }}
                  />
                );
              }}
        />
    )
}

export default ChatPage;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});