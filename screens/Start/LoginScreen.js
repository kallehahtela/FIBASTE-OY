import { ScrollView, SafeAreaView, View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import LoginPNG from '../../assets/images/misc/login.png';
import GooglePNG from '../../assets/images/misc/google.png';
import FacebookPNG from '../../assets/images/misc/facebook.png';
import ApplePNG from '../../assets/images/misc/apple.png';

import CustomButton from '../../components/UI/CustomButton';
import InputField from '../../components/UI/InputField';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={LoginPNG}
              style={{
                height: 300,
                width: 300,
                transform: [{rotate: '-5deg'}]
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Login
          </Text>

          <InputField
            label={'Email ID'}
            icon={
              <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
            }
            keyboardType="email-address"
          />

          <InputField
            label={'Password'}
            icon={
              <MaterialIcons
              name="lock-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
            }
            inputType="password"
            fieldButtonLabel={"Forgot password?"}
            fieldButtonFunction={() => {}}
          />
          
          <CustomButton label={"Login"} onPress={() => {}} />

          <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
            Or, login with ...
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Image source={GooglePNG} style={{height: 24, width: 24}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Image source={FacebookPNG} style={{height: 24, width: 24}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Image source={ApplePNG} style={{height: 24, width: 24}} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>New to the app?</Text>
            <Pressable onPress={() => { console.log('clicked and switching to Register screen'); navigation.navigate('Register'); }}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default LoginScreen;