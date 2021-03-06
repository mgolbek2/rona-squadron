import React, { useState, useCallback, useEffect }  from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { getStateForKey } from "react-native-redux"

const ChatPage = ({}) => {
    let num = 2;
    const [messages, setMessages] = useState([]);
    let botUrl = getStateForKey("botUrl");

  useEffect(() => {
    setMessages([])
  }, [])

  const sendMessage = async (message) => {
      try {
        let response = await fetch(
            botUrl,
            {
                 method: 'POST',
                 headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
                   Authorization: 'EndpointKey 80c6c7a7-7d43-41e3-b5a4-82219feb47aa'
                 },
                 body: JSON.stringify({
                   question: message
            })
        })
        let json = await response.json();
        return json.answers[0].answer;
      } catch (error) {
        console.error(error);
      }
  }

  const onSend = useCallback((messages = []) => {
    setResponse(messages[0].text);
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const setResponse = async (message) => {
      let responseMsg = await sendMessage(message);
      let msgs = [{_id: num, createdAt: new Date(), "text": responseMsg, "user": {"_id": 2, name: 'Sheldon'}}]
      num++;
      setMessages(previousMessages => GiftedChat.append(previousMessages, msgs))
  }

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