import React from 'react';
import { StyleSheet, Text, View,ScrollView,StatusBar, ActivityIndicator} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import { ProfileStats } from '../components/ProfileStats';
import '../styles'
import { gs,colors } from '../styles';
export default class Profile extends React.Component {
  state = {
      user:{},
      isLoading: true,
  }

  async componentDidMount(){
      try{
          let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
          let users = await res.json();

          this.setState({user: users.results[0]},()=>{
              this.setState({isLoading: false})
          });
        }catch (err){
            console.log(err);
        }
  }
  
    render(){
        if(this.state.isLoading){
            return(
                <View style={[gs.center,styles.container]}>
                    <StatusBar barStyle="light-content"/>
                
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
    return (
        <View style={styles.container}>
          <ScrollView>
          <ProfileHeader user={this.state.user}/>
          <ProfileStats/>
          </ScrollView>
        
         
        </View>
      );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.darkBg,
    
  },
});