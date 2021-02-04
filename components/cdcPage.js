import React, { useState, useCallback, useEffect }  from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const CDCPage = ({}) => {
let num = 2;
const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'What would you like to ask me?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Sheldon'
        },
      },
    ])
  }, [])

  const sendMessage = async (message) => {
      try {
        let response = await fetch(
            'https://crudy-qna-bot-test.azurewebsites.net/qnamaker/knowledgebases/ac25df48-b53e-4f27-803b-22d26bb58a43/generateAnswer',
            {
                 method: 'POST',
                 headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
                   Authorization: 'EndpointKey a7f4d387-2ae8-45b0-9c49-ab2c5e4a99cd'
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
    console.log(messages);
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const setResponse = async (message) => {
      let responseMsg = await sendMessage(message);
      console.log(responseMsg);
      let msgs = [{_id: num, createdAt: new Date(), "text": responseMsg, "user": {"_id": 2}}]
      num++;
      setMessages(previousMessages => GiftedChat.append(previousMessages, msgs))
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default CDCPage;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});