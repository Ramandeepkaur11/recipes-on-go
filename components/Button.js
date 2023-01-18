
import {Button} from 'react-native';
export function ButtonRM() {

    return <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
    />
}