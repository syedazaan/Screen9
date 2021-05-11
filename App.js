import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground, TextInput,} from 'react-native';
import { styles1} from  "./styles/styles"

import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="search" size={22} color="#000000" />;  

export default class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
            <View style={styles.headerblock}>
               <View style={styles.leftheaderblock}>
                 
                       <View style={[styles1.flexOne,styles.findblock]}>
                             <Text style={styles.Findyourtext1}>Find your</Text>
                   
                            <Text style={styles.hobbiestext1}>hobbies,</Text>
                       </View>
                 
                      <View style={[styles1.flexOne,]}>
                        <Text style={[styles1.fontSize28,styles1.fontWeight600, ]}>Together.</Text>
                      </View>
               
               </View>
              
               <View style={styles.rightheaderblock}>
                   <Image
                    style={styles.mypic}
                    source={require('./img/surfing.jpg')}
                    />
               </View>
           
            </View>
            
            <View style={styles.searchblock}>
                   <View style={styles.Textsearchblock}>
                         <Text style={styles.Textsearchblock1}>Search</Text>
                   </View>
                   <View style={styles.iconsearchblock}>{myIcon}</View>
            </View>
           
            <View style={styles.Bestpopularblock}>
                    <Text style={styles.Bestpopularblock1}>Best popular</Text>
            </View>
            
            <View style={styles.TwoBoxblock}>
                   <View style={styles.leftTwoBoxblock}>
                         <View style={styles.imageleftTwoBoxblock}>
                           <Image
                               style={styles.skatepic}
                               source={require('./img/RollerSkatingClub.jpg')}
                               />
                         </View>
                         
                         <View style={styles.skateleftTwoBoxblock}>
                                  <Text style={styles.skateleftTwoBoxblock1}>Skate</Text>
                         </View>
                         
                            <View style={styles.mostpopularleftTwoBoxblock}>
                                     <Text style={styles.mostpopularleftTwoBoxblock1}>Most populer hobby..</Text>
                            </View>
                            
                            <View style={styles.joinbuttonftTwoBoxblock}>
                                  <Text style={styles.joinbuttonftTwoBoxblock1}>Join Now</Text>
                            </View>
                   </View>
                  
                   <View style={styles.rightTwoBoxblock}>
                       
                         <View style={styles.imagerighftTwoBoxblock}>
                           <Image
                               style={styles.surfingpic}
                               source={require('./img/surfing.jpg')}

                           />
                         </View>  
                         
                         <View style={styles.surfingrighftTwoBoxblock}>
                             <Text style={styles.surfingrighftTwoBoxblock1}>Surfing</Text>
                         </View>
                         
                         <View style={styles.bestexperiencerightTwoBoxblock}>
                             <Text style={styles.bestexperiencerightTwoBoxblock1}>
                               Best experience of ...
                             </Text>
                         </View>
                         
                         <View style={styles.joinbuttonrightTwoBoxblock}>
                                 <Text style={styles.joinbuttonftrightBoxblock1}>Join Now</Text>
                         </View>
                   </View>
            
            </View>
            
            <View style={styles.myhobbyblock}>
                  <Text style={styles.myhobby1}>My Hobby</Text>
            </View>
            
            <View style={styles.Box1block}>
                  <View style={styles.leftBox1block}>
                    <Image
                      style={styles.basketpic}
                      source={require('./img/basketball.jpg')}
                      />
                  </View>
                 
                  <View style={styles.rightBox1block}>
                        
                        <View style={styles.basketblock}>
                               <Text style={styles.basketblock1}>Basket</Text>
                        </View>
                       
                        <View style={styles.myfavoritbasketblock}>
                          <Text style={styles.myfavoritbasketblock1}>My favorit hobby right now</Text>
                        </View>
                        
                        
                        <View style={styles.itsverynicebasketblock}>
                          <Text style={styles.itsverynicebasketblock1}>it's very nice</Text>
                        </View>
                        
                        <View style={styles.myinterestbasketblock}>
                           <Text style={styles.myinterestbasketblock1}>My Interest 85%</Text>
                        </View>
                        
                        <View style={styles.progressbarbasketblock}>
                            <View style={styles.progressbarbasketblock1}></View>
                            <View style={styles.emptyprogressbarbasket}></View>
                        </View>
                  </View>
            </View>
          
            <View style={styles.Box2block}>
                   <View style={styles.leftBox2block}>
                     <Image
                        style={styles.footballpic}
                        source={require('./img/football.jpg')}
                        />
                   </View>
                  
                   <View style={styles.rightBox2block}>
                        <View style={styles.footballblock}>
                          <Text style={styles.footballblock1}>Football</Text>
                        </View>
                        
                        <View style={styles.veryfootballblock}>
                            <Text style={styles.veryfootballblock1}>Very attractive hobby,much</Text>
                        </View>
                        
                        <View style={styles.friendfootballblock}>
                            <Text style={styles.friendfootballblock1}>friend in here.</Text>
                        </View>
                        
                        <View style={styles.myinterestfootballblock}>
                               <Text style={styles.myinterestfootballblock1}>My Interest 95%</Text>
                        </View>
                       
                        <View style={styles.progressbarfootballblock}>
                          <View style={styles.progressbarfootballblock1}></View>
                          <View style={styles.emptyprogressbarfootball}></View>
                        </View>
                   </View>
            
            </View>
         
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(250,250,250)',
    margin:15,
    // alignItems:'center',
    // justifyContent:'center',
  },
  headerblock:{
    flex:2.3,
    flexDirection:'row',
    // borderWidth:1,
  },
  leftheaderblock:{
   flex:6,
  //  alignItems::'center',
  //  borderWidth:1,
  },

  findblock:{
 flex:1,
//  justifyContent:'center',
alignItems:'center',
 flexDirection:'row',
  },

  Findyourtext1:{
    fontSize:28,
    color:'rgb(28,30,33)',
  },

  hobbiestext1:{
    marginLeft:5,
    fontSize:28,
    color:'rgb(28,30,33)',
    fontWeight:'bold',
  },
  
  rightheaderblock:{
   flex:1.2,
   alignItems:'center',
   justifyContent:'center',
  //  borderWidth:1,
  },

  mypic:{
width:50,
height:50,
borderRadius:25,
  },


  searchblock:{
  flex:1.5,
  flexDirection:'row',
  marginTop:5,
  marginBottom:5,
  borderRadius:15,
  backgroundColor:'rgb(245,245,245)',
  // borderWidth:1,
  },
  Textsearchblock:{
    flex:8,
    justifyContent:'center',
    // borderWidth:1,
  },

  Textsearchblock1:{
    fontSize:18,
    marginLeft:20,
    color:'rgb(211,214,219)',
  },

  iconsearchblock:{
    flex:1.3,
    justifyContent:'center',
    // alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
  },
  
  Bestpopularblock:{
    flex:1.2,
    justifyContent:'center',
    // borderWidth:1,
  },

  Bestpopularblock1:{
  fontSize:18,
  fontWeight:'bold',
  color:'rgb(28,30,33)',
  },

  TwoBoxblock:{
    flex:6,
    flexDirection:'row',
    // borderWidth:1,
  },
  leftTwoBoxblock:{
   flex:1,
   borderRadius:15,
   marginRight:15,
   backgroundColor:'#fff',
  //  borderWidth:1,
  },

  imageleftTwoBoxblock:{
   flex:3,
   alignItems:'center',
   justifyContent:'center',
   margin:10,
   borderRadius:15,
  //  borderWidth:1,
  },

  skatepic:{

    width:150,
    height:75,
    borderRadius:15,
    
    // borderRadius:50,
  },

  skateleftTwoBoxblock:{
     flex:1.2,
     
     justifyContent:'center',
    //  borderWidth:1,
  },

  skateleftTwoBoxblock1:{
  fontSize:20,
  marginLeft:15,
  fontWeight:'bold',
  color:'rgb(28,30,33)',
  },

  mostpopularleftTwoBoxblock:{
   flex:1,
   justifyContent:'flex-start',
  //  borderWidth:1,
  },
  mostpopularleftTwoBoxblock1:{
   fontSize:15,
   fontWeight:'700',
   marginLeft:15,
   color:'rgb(28,30,33)',
  },

  joinbuttonftTwoBoxblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    borderRadius:10,
    marginTop:10,
    marginLeft:12,
    marginRight:10,
    marginBottom:5,
    // marginLeft:12,
    backgroundColor:'rgb(24,119,242)',
    // borderWidth:1,
  },
  joinbuttonftTwoBoxblock1:{
    fontSize:16,
    color:'white',
    fontWeight:'bold',
    
  },

  rightTwoBoxblock:{
    flex:1,
    borderRadius:15,
    backgroundColor:'#fff',
    // borderWidth:1,
  },



  imagerighftTwoBoxblock:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius:15,
    // borderWidth:1,
  },

  surfingpic:{
    width:150,
    height:75,
    borderRadius:15,
  },

  surfingrighftTwoBoxblock:{
    flex:1.2,
    // borderWidth:1,
  },

  surfingrighftTwoBoxblock1:{
    fontSize:20,
    marginLeft:15,
    fontWeight:'bold',
    color:'rgb(28,30,33)',
  },

  bestexperiencerightTwoBoxblock:{
    flex:1,
    justifyContent:'flex-start',
    // borderWidth:1,
  },

  bestexperiencerightTwoBoxblock1:{
    fontSize:15,
    fontWeight:'700',
    marginLeft:15,
    color:'rgb(28,30,33)',
  },

  joinbuttonrightTwoBoxblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    borderRadius:10,
    marginTop:10,
    marginBottom:5,
    marginRight:10,
    marginLeft:12,
    backgroundColor:'rgb(24,119,242)',
    // borderWidth:1,   
    // flex:1.2,
    // borderWidth:1,
  },

  joinbuttonftrightBoxblock1:{
    fontSize:16,
    color:'white',
    fontWeight:'bold',
  },

  myhobbyblock:{
    flex:1.3,
    justifyContent:'center',
  
    // borderWidth:1,
  },

  basketblock1:{
   fontSize:22,
   marginLeft:15,
   fontWeight:'bold',
   color:'rgb(28,30,33)',
   
  },

  myhobby1:{
 fontSize:18,   
 fontWeight:'bold',
 marginTop:7,
 color:'rgb(28,30,33)',
  },

  Box1block:{
   flex:3,
   flexDirection:'row',
   borderRadius:15,
  //  borderWidth:1,
  },
  leftBox1block:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  // borderWidth:1,
  },

  basketpic:{
  width:100,
  height:100,
  borderRadius:15,
  },

  rightBox1block:{
    flex:2,
    // marginBottom:5,
    // marginTop:5,
    backgroundColor:'#fff',
    // borderWidth:1,
  },


  basketblock:{
    flex:1.5,
    // borderWidth:1,
  },



  myfavoritbasketblock:{
  flex:1.3,
  justifyContent:'center',
  // borderWidth:1,
  },

  myfavoritbasketblock1:{
    marginLeft:15,
   fontSize:15,
   fontWeight:'700',
   color:'rgb(28,30,33)',
  },

  itsverynicebasketblock:{
    flex:1.2,
    justifyContent:'flex-start',
    marginBottom:0,
  // borderWidth:1,
  },
  itsverynicebasketblock1:{
    marginLeft:15,
   fontSize:15,
   fontWeight:'700',
   color:'rgb(28,30,33)',
  },

  myinterestbasketblock:{
    flex:1.2,
    justifyContent:'flex-end',
    // marginTop:3,
    // borderWidth:1,
  },

  myinterestbasketblock1:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'700',
    color:'rgb(181,181,181)'
  },

  progressbarbasketblock:{
  // flex:0.5,
  // borderWidth:1,
  flex:0.25,
  flexDirection:'row',
  marginLeft:15,
  marginRight:15,
  marginTop:3,
  marginBottom:3,
  backgroundColor:'gray',
  borderTopLeftRadius:25,
  borderBottomLeftRadius:25,
  borderTopRightRadius:25,
  borderBottomLeftRadius:25,
// borderWidth:1, 
},
  progressbarbasketblock1:{
    flex:2.5,
    backgroundColor:'rgb(24,119,242)',
  },

  emptyprogressbarbasket:{
    flex:1,
    backgroundColor:'rgb(221,221,221)',
  },

  Box2block:{
    flex:3,
    flexDirection:'row',
    marginTop:10,
    borderRadius:15,
    backgroundColor:'#fff',
    // borderWidth:1,
  },
  leftBox2block:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  // borderWidth:1,
  },

  footballpic:{
width:100,
height:100,
borderRadius:15,
  },

  rightBox2block:{
    flex:2,
    // marginTop:5,
    // marginBottom:5,
    // borderWidth:1,
  },

  footballblock:{
    flex:1.5,

    // borderWidth:1,
  },
  footballblock1:{
       fontSize:22,
       marginLeft:15,
      fontWeight:'bold',
      color:'rgb(28,30,33)',
  },

  veryfootballblock:{
    flex:1,
    // borderWidth:1,
  },

  veryfootballblock1:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'700',
    color:'rgb(28,30,33)',
  },
 
  friendfootballblock:{
    flex:1,
    // borderWidth:1,
  },
  friendfootballblock1:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'700',
    color:'rgb(28,30,33)',
  },

  
  myinterestfootballblock:{
    flex:1.2,
    // borderWidth:1,
  },

  myinterestfootballblock1:{
    marginLeft:15,
    fontSize:15,
    fontWeight:'700',
    color:'rgb(181,181,181)'
  },

  progressbarfootballblock:{
    flex:0.25,
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    marginTop:3,
    marginBottom:3,
    // backgroundColor:'gray',
    backgroundColor:'rgb(161,161,161)',
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
  // borderWidth:1,
  },

  progressbarfootballblock1:{
     flex:7,
     backgroundColor:'rgb(24,119,242)',
    // backgroundColor:'blue',
  },
  emptyprogressbarfootball:{
    flex:1,
    backgroundColor:'rgb(221,221,221)',
  },
});

