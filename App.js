import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground,} from 'react-native';
import { styles1} from  "./styles/styles"




export default class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
            <View style={styles.headerblock}>
               <View style={styles.leftheaderblock}>
                 <View style={[styles1.flex1,styles1.borderWidth1,]}></View>
                 <View style={[styles1.flex1,styles1.borderWidth1,]}></View>
               </View>
               <View style={styles.rightheaderblock}></View>
            </View>
            
            <View style={styles.searchblock}>
              <View style={styles.Textsearchblock}></View>
              <View style={styles.iconsearchblock}></View>
            </View>
           
            <View style={styles.Bestpopularblock}>
              
            </View>
            
            <View style={styles.TwoBoxblock}>
                   <View style={styles.leftTwoBoxblock}></View>
                   <View style={styles.rightTwoBoxblock}></View>
            </View>
            
            <View style={styles.myhobbyblock}></View>
            <View style={styles.Box1block}>
              <View style={styles.leftBox1block}></View>
              <View style={styles.rightBox1block}></View>
            </View>
            <View style={styles.Box2block}>
            <View style={styles.leftBox2block}></View>
              <View style={styles.rightBox2block}></View>
            </View>
         
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    margin:15,
    // alignItems:'center',
    // justifyContent:'center',
  },
  headerblock:{
    flex:2.3,
    flexDirection:'row',
    borderWidth:1,
  },
  leftheaderblock:{
   flex:6,

   borderWidth:1,
  },
  rightheaderblock:{
   flex:1.2,
   borderWidth:1,
  },


  searchblock:{
  flex:1.5,
  flexDirection:'row',
  marginTop:5,
  marginBottom:5,
  borderRadius:15,
  borderWidth:1,
  },
  Textsearchblock:{
    flex:8,
    borderWidth:1,
  },

  iconsearchblock:{
    flex:1,
    borderWidth:1,
  },
  
  Bestpopularblock:{
    flex:1.2,
    borderWidth:1,
  },
  TwoBoxblock:{
    flex:4.5,
    flexDirection:'row',
    borderWidth:1,
  },
  leftTwoBoxblock:{
   flex:1,
   borderRadius:15,
   marginRight:15,
   borderWidth:1,
  },
  rightTwoBoxblock:{
    flex:1,
    borderRadius:15,
    borderWidth:1,
  },

  myhobbyblock:{
    flex:1.3,
    borderWidth:1,
  },
  Box1block:{
   flex:3,
   flexDirection:'row',
   borderRadius:15,
   borderWidth:1,
  },
  leftBox1block:{
  flex:1,
  borderWidth:1,
  },

  rightBox1block:{
    flex:2,
    borderWidth:1,
  },


  Box2block:{
    flex:3,
    flexDirection:'row',
    marginTop:10,
    borderRadius:15,
    borderWidth:1,
  },
  leftBox2block:{
    flex:1,
  borderWidth:1,
  },
  rightBox2block:{
    flex:2,
    borderWidth:1,
  },
});

