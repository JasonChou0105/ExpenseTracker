import { TouchableWithoutFeedback, Keyboard } from 'react-native'

function DismissKeyboard({children}) {
    return ( 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    );
}

export default DismissKeyboard;