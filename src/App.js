import React from 'react';
//import './res/css/App.css';
//import Head from './head';
//import Main from './main';
//import Foot from './foot';
import './index.css'
import modem from './modem-5.png'
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
var lastScrollTop = 0;
var hello = 'hello';
var appendMe =
  '<!DOCTYPE html> <html><head><title>Something Amazing....</title></head><body><h1 class={myClass}>Hey there...🙃</h1><p>I was wondering if....Ummm...Can we build something amazing together?🥺👕👉🏿👈🏿👖👟....haha😅...</p></body></html>';
var d = new Date();
var n = d.getFullYear();
var date = new Date();
var result = date.toLocaleDateString("en-GB", { // you can skip the first argument
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
console.log();

var initialCommands = ['npx create-react-app your_project', 'cd your_project && dir', 'yarn install', 'yarn add redux redux-thunk firebase @material-ui/core add @material-ui/icons'];
var initinitialOutput = ['Creating a new project', `${result} ${d.getHours()}:${d.getMinutes()} <DIR> your_project_files`, 'Updating Packages', 'Installing Packages']
var initialCommand = 'npx create-react-app my-app';
var initialOutput = '########################'
var i = 0;
export class App extends React.Component {


  constructor(props) {
    super(props);
    this.itemOne = React.createRef();
    this.itemTwo = React.createRef();
    this.whatIDo = React.createRef();
    this.myCommandPrompt = React.createRef();

    this.state = {
      itemOne: 0,
      itemOnePosition: {},
      initialPostion: 0,
      whatIDo: {},
      whatIDoTextOpacity: 0,
      whatIDoText: '',
      commands: '',
      commandOut: '',
      year: null

    };
  }



  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);

  }
  componentDidMount() {

    var d = new Date();
    var n = d.getFullYear();

    console.log(window.scrollY + window.innerHeight);
    this.setState({
      year: n
    });
  }




  onScroll = () => {

    const scrollPos = window.scrollY + window.innerHeight;

    var command = this.myCommandPrompt.current.getBoundingClientRect();

    if (
      command.top >= 0 &&
      command.left >= 0 &&
      command.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      command.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      i ++;
      if(i == 1){
        this.typeCommands();
    
      }
    }
   





  }


  typeCommands = () => {


    
    this.load();


  }

  timer = (ms) => {
    return new Promise(res => setTimeout(res, ms));
  }

  async  load() {



    for (var controller = 0; controller < initialCommands.length; controller++) {
      var typeCommand = '';
      var typeCommandOutPut = '';
      this.setState({
        commands: '',
        commandOut: '',
      });
      
      //console.log(initialCommands[controller]);
      for (var i = 0; i < initialCommands[controller].length; i++) {
        typeCommand = typeCommand.concat(initialCommands[controller].charAt(i));
       // console.log(typeCommand);
        this.setState({
          commands:typeCommand
        });
        await this.timer(70); // then the created Promise can be awaited
      }
      //console.log(initinitialOutput[controller]);
      this.setState({
        commandOut:initinitialOutput[controller]
      });
      
      if(controller != 1){
        await this.timer(2000);
        for (var z = 0; z < initialOutput.length; z++) {
  
          typeCommandOutPut = typeCommandOutPut.concat(initialOutput.charAt(z));
         // console.log(typeCommandOutPut);
          this.setState({
            commandOut:typeCommandOutPut
          });
          await this.timer(400); // then the created Promise can be awaited
      }

      }

      await this.timer(2000);
       
      




    }

    this.setState({
      commandOut:'Ready to deploy...'
    });




  }

  

  render() {
    var window = {
      color: 'white',
      backgroundColor: 'rgba(189,195,199,1)',
      border: '1px solid ',
      borderRadius: 2,
      marginTop: 50,


    };

    var controlsActions = {
      border: '2px solid ',
      display: 'flex',
      flexDirection: 'row',
      borderStyle: 'outset',
      justifyContent: 'flex-end',
      borderRadius: 2,
      backgroundImage: 'linear-gradient(to right, rgba(0,0,255,1), rgba(0,0,255,0.5),rgba(255,255,255,0))'
    };
    var content = {
      backgroundColor: 'rgba(228,233,237,1)',
      border: '1px solid ',
      borderStyle: 'inset',
      color: 'black',
      flexDirection: 'column',
      display: 'flex',
      fontSize: '0.5em',
      padding: 10,

    };

    var actions = {
      padding: 2,
      backgroundColor: 'rgba(218,223,225,1)',
      margin: 3,
      borderRadius: 2,
      textAlign: 'center',
      fontSize: '0.1em',
      borderStyle: 'outset',
      border: '0.1',
      color: 'grey',



    }

    var maximize = {
      border: '1px solid ',
      padding: 2,
    }

    var aboutMe = {
      display: 'flex',
      margin: 0,
      padding: 4,
      flexDirection: 'column',
    }

    var aboutMeInput = {
      color: 'black',
      margin: 5,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 3,
      borderStyle: 'inset',
      fontSize: '0.8em',

    }

    var aboutMeButtonsControl = {
      display: 'flex',
      flexDirection: 'row',


    }

    var aboutMeButtons = {
      borderStyle: 'outset',
      padding: 2,
      margin: 5,
      color: 'grey',
      borderRadius: 3,
      fontSize: '0.5em',

    }

    var aboutMeForm = {
      display: 'flex',
      flexDirection: 'column'
    }

    var aboutMeContent = {
      display: 'flex',
      flexDirection: 'column'
    }

    var skillContainer = {
      display: 'flex',
      flexDirection: 'row',
      color: 'black',

    }

    var skillBar = {
      padding: 5,
      borderStyle: 'outset',
      color: 'grey',
      fontSize: '1em',
    }

    var skillContent = {
      borderStyle: 'inset',
      backgroundColor: 'white',
      color: 'black',
      padding: 5,
      fontSize: '1.5em',

    }

    var intermidiate = {
      color: 'white',
      paddingTop: '5vh'
    }

    var findMeIntermidiate = {
      color: 'white',
      paddingTop: '30vh'
    }

    var starter = {
      paddingTop: '50vh',
      color: 'white',
      textAlign: 'center',
      marginBottom: '50vh'
    }


    var contactMe = {
      display: 'flex',
      flexDirection: 'row',
      padding: 10
    }

    var contactMeDetails = {
      display: 'flex',
      flexDirection: 'column',
      color: 'rgba(129,129,129,1)',
      padding: 5

    }


    var commandPrompt = {
      borderStyle: 'inset',
      padding: 5,
      color: 'rgb(50,205,50)',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 5,
      marign: 10,
      fontSize: '0.9em',
    }

    var commandPromptOutput = {
      paddingBottom: 50,

    }

    var loadingBar = {
        backgroundColor:'black',
        padding:5,
        marignTop:'20vh',
        marginBottom:'50vh',
        paddingLeft:'50vw',
    }

    var projectDescription = {
      color: 'rgb(50,205,50)',
      marginTop:10,
    }

    var projectContent = {
      display:'flex',
      flexDirection:'column'
    }

    var projectContentMedia = {
      borderStyle:'inset',
      backgroundColor:'white'
      
    }


    var projectContentMediaImg = {
      
  width: '100%',
  maxWidth: '400px',
  height: 'auto'
    }

    var projectUrl = {
      backgroundImage: 'linear-gradient(to right, rgba(35, 203, 167, 1),rgba(255,255,255,0))',
      padding:5,
      margin:5,
      borderStyle:'inset',
      borderRadius:5,
    }

    var projectText ={
      color:'white'
    }
    return (

      <Container >

        <Grid container spacing={3}>


          <Grid item xs={12} md={12} lg={12}>
            <div style={starter}>
              <span>
              My Projects
            </span>

            </div>
          </Grid>

          <Grid item xs={12} md={6} >
            <div style={intermidiate}>Electron Instagram Clone</div>
            <div style={projectDescription}>
            I recreated a desktop clone of instagram Web using Electorn JS.
         
            </div>
           </Grid>

          <Grid item xs={12} md={6} >
            <div style={window}>
              <div style={controlsActions}>
                <span style={actions}>_</span>
                <span style={actions}>
                  <span style={maximize}></span>
                </span>
                <span style={actions}>X</span>
              </div>
              <div style={content}>
              <span>The Flea</span>
                <div style={projectContent}>
                  <div style={projectUrl}>
                    <span style={projectText}>https://localhost:3000</span>

                  </div>
                  <div style={projectContentMedia}>
                    <img style={projectContentMediaImg} src={'https://neosmart.net/wiki/wp-content/uploads/sites/5/2014/06/0x00000050.png'}/>
                  </div>
                </div>

              </div>

            </div>

          </Grid>

          
          <Grid item xs={12} md={6} >
            <div style={intermidiate}>Electron Github Clone</div>
            <div style={projectDescription}>     
              Played around with the Github API and made a desktop app of Github web using electron JS
            </div>

          </Grid>
          <Grid item xs={12} md={6} >
            <div style={window}>
              <div style={controlsActions}>
                <span style={actions}>_</span>
                <span style={actions}>
                  <span style={maximize}></span>
                </span>
                <span style={actions}>X</span>
              </div>
              <div style={content}>
              <span>Projects</span>
              <div style={projectContent}>
                  <div style={projectUrl}>
                    <span style={projectText}>https://localhost:5000</span>

                  </div>
                  <div style={projectContentMedia}>
                    <img style={projectContentMediaImg} src={'https://neosmart.net/wiki/wp-content/uploads/sites/5/2014/06/0x00000050.png'}/>
                  </div>
                </div>
              </div>

            </div>

          </Grid>


          <Grid item xs={12} md={6} >
            <div style={intermidiate}>UI/UX challenges</div>
            <div style={projectDescription}>     
              Personal challenges that I used for practice.These are some of the layouts that I once considered hard to create.
            </div>
          </Grid>
          <Grid item xs={12} md={6} >
            <div style={window}>
              <div style={controlsActions}>
                <span style={actions}>_</span>
                <span style={actions}>
                  <span style={maximize}></span>
                </span>
                <span style={actions}>X</span>
              </div>
              <div style={content}>
              <span>CSS - Grid</span>
              <div style={projectContent}>
                  <div style={projectUrl}>
                    <span style={projectText}>https://0yah.github.io/css-grid/</span>

                  </div>
                  <div style={projectContentMedia}>
                   
                  </div>
                </div>
              </div>

            </div>

          </Grid>

          <Grid item xs={12} md={6}>

            <div style={findMeIntermidiate}>How to get in touch</div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div style={window}>

              <div style={controlsActions}>
                <span style={actions}>_</span>
                <span style={actions}>
                  <span style={maximize}></span>
                </span>
                <span style={actions}>X</span>
              </div>



              <div style={content}>

                <div style={aboutMe}>

                  <div style={aboutMeForm}>

                    <div style={contactMe}>
                      <img src={modem} style={{ height: 'fit-content', width: 'fit-content' }} />
                      <div style={contactMeDetails}>
                        <span> Contact Me</span>

                        <span>Let's work together</span>

                      </div>

                    </div>



                    <div style={aboutMeContent}>

                      <div style={aboutMeInput}>
                        Ian
                  </div>

                      <div style={aboutMeInput}>
                        Naylan
                  </div>

                      <div style={aboutMeInput}>
                        naiaynaylan@gmail.com
                  </div>

                      <div ref={this.myCommandPrompt}style={commandPrompt}>
                        <span>0yaah 367 [Version 27.07.1999]</span>
                        <span> &copy; {

                          this.state.year

                        } All rights reserved</span>
                        <span>C:> {this.state.commands}</span>
                        <span style={commandPromptOutput}>
                          {this.state.commandOut}
                        </span>

                      </div>


                    </div>

                  </div>





                  <div style={aboutMeButtonsControl}>
                    <div style={aboutMeButtons}>Twitter</div>
                    <div style={aboutMeButtons}>Instagram</div>
                  </div>

                </div>

              </div>

            </div>
          </Grid>
        </Grid>

      </Container>
    );

  }



}

export default App;
