import { StatusBar } from 'expo-status-bar';
import { styles } from './style';
import { Text, View } from 'react-native';
import MultiInput from '../utility/MultiInput'

export default function Form({ formContent, updateValue }) {
  return (
    <View style={styles.container}>
      {formContent && Object.entries(formContent) && Object.entries(formContent).map(
        ([key, value])=>
         <MultiInput
         required={!!value.required}
         key={key} 
         type={value.type}
         name={key}
         value={value.value}
         options={value.options || []}
         updateValue={updateValue}
         />
         )}
    </View>
  );
}


