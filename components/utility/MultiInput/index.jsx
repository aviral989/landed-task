import { Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { multiInputStyles } from '../MultiInput/style';


export default function MultiInput({ name, type, options, updateValue, value }) {
  return (
    <View style={multiInputStyles.container}>
      <Text>{name?.toProperCase()}</Text>
      {type === 'select' ? <Picker
        selectedValue={value || ''}
        style={multiInputStyles.input}
        onValueChange={(itemValue, itemIndex) => {
          updateValue(name, itemValue)

        }
        }
      >
        {options?.map((value, key) =>
          <Picker.Item key={key} label={value} value={value} />

        )}

      </Picker>
        : <TextInput value={value} onChangeText={(textValue) => {
          updateValue(name, textValue)
        }} style={multiInputStyles.input} />}


    </View>
  );
}


