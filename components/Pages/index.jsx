import { useEffect, useState } from 'react';
import { pagesStyles } from './style';
import { Text, View, ToastAndroid } from 'react-native';
import config from '../../config.json'
import Form from '../Form';
import { Steps, Button } from '@ant-design/react-native'
const Step = Steps.Step

/**
 * 
 * @returns 
 */
export default function Pages() {
  const steps = [
    { title: 'In Progress', description: 'This is description' },
    { title: 'Finished', description: 'This is description' },
  ]
  const [page, setPage] = useState(0)
  const [userConfig, setUserConfig] = useState(config)


  /**
   * 
   * @param {*} fieldName 
   * @param {*} newValue 
   * @returns 
   */
  const updateValue = (fieldName, newValue) => {
    const updatedObj = JSON.parse(JSON.stringify(userConfig));
    updatedObj.pages[page][fieldName].value = newValue;
    setUserConfig(updatedObj)
    return updatedObj;
}


/**
 * 
 * @param {*} callback 
 */
  const validateForm = (callback) =>{
    let validated = false
    const formData = Object.values(userConfig.pages[page])
    for(let i=0;i< formData.length;i++){
      if(formData[i].required && !formData[i].value){
        validated = false
      }
      else{
        validated = true
      }
    }
    if(!validated){
      ToastAndroid.show('Form is submitted', ToastAndroid.SHORT)
    }
    else{
      callback()
    }
  }

  /**
   * 
   */
  return (
    <View style={pagesStyles.container}>
      <Steps size="small" current={page} direction="horizontal">
        {steps.map((item, index) => (
          <Step
            key={index}
            onChange={(value) => {
              setPage(value)
            }}
            status={item.status}
          />
        ))}
      </Steps>
      <Form 
      formContent={userConfig.pages[page]} 
      updateValue={updateValue}
      />
      <View style={pagesStyles.footer}>

        {page === 1 && <Button title='Back' onPress={() => {
          setPage(page - 1)
        }} >Back</Button>}
        {page === 0 &&
          <Button title='Next' onPress={() => {
            validateForm(()=> setPage(page + 1))
            
          }} type="primary">Next</Button>}
        {page === 1 &&
          <Button title='submit' onPress={() => {
            validateForm(()=> ToastAndroid.show('Please fill the form', ToastAndroid.SHORT))
          }} type="primary">submit</Button>}
      </View>


    </View>
  );
}


