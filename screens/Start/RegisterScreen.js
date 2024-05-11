import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import RegistrationPNG from '../../assets/images/misc/registration.png';
import GooglePNG from '../../assets/images/misc/google.png';
import FacebookPNG from '../../assets/images/misc/facebook.png';
import ApplePNG from '../../assets/images/misc/apple.png';

import CustomButton from '../../components/UI/CustomButton';
import InputField from '../../components/UI/InputField';

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={RegistrationPNG}
            style={{
              height: 300,
              width: 300,
              transform: [{ rotate: '-5deg' }]
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
          Register
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
            <Image source={GooglePNG} style={{ height: 24, width: 24 }} />
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
            <Image source={FacebookPNG} style={{ height: 24, width: 24 }} />
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
            <Image source={ApplePNG} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
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
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <MaterialIcons
              name="lock-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <CustomButton label={'Register'} onPress={() => {}} />

        <CustomButton
          label={'Test Onboarding'}
          onPress={() => navigation.navigate('Onboarding')}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => { console.log('clicked and going to the Login screen'); navigation.navigate('Login'); }}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;