import React, {useEffect,useState} from 'react';
import {View, StyleSheet, Text,ScrollView,TouchableOpacity} from 'react-native';
import Button from '../components/ui/Button';
import Modal from 'react-native-modal';
import Popover from 'react-native-popover-view';


function Tema1({navigation}) {
  const [isModalAntecedentesOpen, setIsModalAntecedentesOpen]  = useState(false);
  const [isModalClasificacionOpen, setIsModalClasificacionOpen]  = useState(false);
  const [isModalTecnologiasOpen, setIsModalTecnologiasOpen]  = useState(false);
  const [isModalTecEmergentesOpen, setIsModalTecEmergentesOpen]  = useState(false);
  const [isModalTMOpen, setIsModalTMOpen]  = useState(false);
  const [isModalVDIOpen, setIsVDIOpen]  = useState(false);
  const [isModalCCOpen, setIsModalCCOpen]  = useState(false);
   
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Text style={styles.title}>Programacion movil </Text>
          <Button title="Antecedentes de las tecnologías móviles" onPress={ () => setIsModalAntecedentesOpen(true)}></Button>
          <Modal isVisible={isModalAntecedentesOpen}>
            <View style={{height: '85%' ,width:'100%', backgroundColor:'#313244'}}>
              <ScrollView style={{ alignContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'#f2cdcd', textAlign:'center', marginTop:'5%',fontSize:24}}> Telefonía móvil</Text>
              <Text style={{color:'#cba6f7', textAlign:'center', marginTop:'5%', fontSize:18}}>Telefonía móvil: Los antecedentes de las tecnologías móviles se remontan al desarrollo 
              de la telefonía móvil, que comenzó a mediados del siglo XX. El primer sistema de telefonía móvil comercial fue lanzado en Japón en 1979.</Text>
              
              <Text style={{fontWeight:'bold',color:'#f2cdcd', textAlign:'center', marginTop:'5%',fontSize:24}}> PDA (Asistentes digitales personales)</Text>
              <Text style={{color:'#cba6f7', textAlign:'center', marginTop:'5%',fontSize:18}}>A finales de los años 90 y principios de los 2000,
               surgieron dispositivos como las PDAs, que ofrecían funciones básicas de computación y organización personal.</Text>

               <Text style={{fontWeight:'bold',color:'#f2cdcd', textAlign:'center', marginTop:'5%',fontSize:24}}> Evolución hacia smartphones</Text>
               <Text style={{color:'#cba6f7', textAlign:'center', marginTop:'5%',fontSize:18}}> A principios de la década de 2000, los teléfonos móviles comenzaron a integrar capacidades más avanzadas,
                como acceso a internet, correo electrónico, y aplicaciones básicas. Esto marcó el comienzo de la era de los smartphones.</Text>

                <Text style={{fontWeight:'bold',color:'#f2cdcd', textAlign:'center', marginTop:'5%',fontSize:24}}> Avances en conectividad</Text>
               <Text style={{color:'#cba6f7', textAlign:'center', marginTop:'5%',fontSize:18}}> La proliferación de tecnologías de conectividad como el Wi-Fi y
                el Bluetooth también contribuyó al desarrollo de tecnologías móviles, permitiendo una mayor interconexión entre dispositivos.</Text>

                <Text style={{fontWeight:'bold',color:'#f2cdcd', textAlign:'center', marginTop:'5%',fontSize:24}}> Desarrollo de sistemas operativos Moviles</Text>
               <Text style={{color:'#cba6f7', textAlign:'center', marginTop:'5%',fontSize:18}}>  La aparición de sistemas operativos específicamente diseñados para dispositivos móviles,
                como iOS de Apple y Android de Google, ha sido fundamental en el crecimiento y la diversificación de las tecnologías móviles.</Text>
                <View style={{height:50}}></View>
              </ScrollView>
            </View>
            <Button title="Cerrar" onPress={() => setIsModalAntecedentesOpen(false)}> </Button>
            </Modal>

          <View style={{margin:10}}></View>
          <Button title="Clasificación de los dispositivos móviles" onPress={ () => setIsModalClasificacionOpen(true)}></Button>
          <Modal isVisible={isModalClasificacionOpen} >
            
            <View style={{height: '85%',width:'100%', backgroundColor:'#313244'}}>
            <View style={{height:'10%'}}></View>
            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#74c7ec', textAlign:'center', marginTop:'5%',fontSize:24}}> Según su función</Text>
              </TouchableOpacity>
            )}>
              <View style={{ height:100, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
            <Text style={{color:'#a6e3a1'}}> 
            Smartphones</Text>
            <Text style={{color:'#a6e3a1'}}> Tablets </Text>
            <Text style={{color:'#a6e3a1'}}> Wearables (relojes inteligentes, dispositivos de seguimiento de actividad, etc.) </Text>
            <Text style={{color:'#a6e3a1'}}> Dispositivos de realidad virtual y aumentada </Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>

            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#74c7ec', textAlign:'center', marginTop:'5%',fontSize:24}}>  Según su sistema operativo</Text>
              </TouchableOpacity>
            )}>
              <View style={{ height:70, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
                <Text style={{color:'#a6e3a1'}}> iOS (Apple) </Text>
                <Text style={{color:'#a6e3a1'}}> Android (Google) </Text>
                <Text style={{color:'#a6e3a1'}}>  Phone (Microsoft) - ya descontinuado </Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>

            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#74c7ec', textAlign:'center', marginTop:'5%',fontSize:24}}>  Según su capacidad de procesamiento</Text>
              </TouchableOpacity>
            )}>
            <View style={{ height:70, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
                <Text style={{color:'#a6e3a1'}}>Dispositivos de gama alta</Text>
                <Text style={{color:'#a6e3a1'}}>Dispositivos de gama media</Text>
                <Text style={{color:'#a6e3a1'}}>Dispositivos de gama baja</Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>

            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#74c7ec', textAlign:'center', marginTop:'5%',fontSize:24}}> Según su tamaño y forma</Text>
              </TouchableOpacity>
            )}>
           <View style={{ height:85, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
                <Text style={{color:'#a6e3a1'}}> Teléfonos compactos </Text>
                <Text style={{color:'#a6e3a1'}}> Teléfonos de pantalla grande (phablets) </Text>
                <Text style={{color:'#a6e3a1'}}>  Tablets estándar </Text>
                <Text style={{color:'#a6e3a1'}}>  Tablets convertibles con teclado </Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>
            </View>
            <Button title="Cerrar" onPress={() => setIsModalClasificacionOpen(false)}/>
            </Modal>

          <View style={{margin:10}}></View>
          <Button title="Tecnologías de clientes ligeros" onPress={ () => setIsModalTecnologiasOpen(true)}></Button>
          <Modal isVisible={isModalTecnologiasOpen}>
            <View style={{margin:10}}></View>
            <View style={{height: '85%',width:'100%', backgroundColor:'#313244'}}>
            <Text style={{color:'#cba6f7', fontSize:18}}>Los clientes ligeros, también conocidos como thin clients,
               son dispositivos de computación que dependen en gran medida de un servidor central para la computación, almacenamiento y recursos de software. </Text>
               <Button title="Terminal Server" onPress={() => setIsModalTMOpen(true)}> </Button>
               <Modal isVisible={isModalTMOpen}>
               <View style={{ height:85, backgroundColor:'#313244',}}>
                <Text style={{color:'#94e2d5'}}>Un servidor central ejecuta aplicaciones y gestiona recursos de almacenamiento y procesamiento,
                   mientras que los clientes ligeros solo actúan como interfaces de usuario para acceder a estas aplicaciones.</Text>
                </View>
                <Button title="Cerrar" onPress={() => setIsModalTMOpen(false)}> </Button>
               </Modal>
               <Button title="Virtual Desktop Infrastructure (VDI)" onPress={() => setIsVDIOpen(true)}> </Button>
               <Modal isVisible={isModalVDIOpen}>
                <View style={{ height:85, backgroundColor:'#313244',}}>
                <Text style={{color:'#94e2d5'}}>Similar al Terminal Server, pero con máquinas virtuales que ofrecen escritorios virtuales a los usuarios a través de una red.</Text>
                </View>
                <Button title="Cerrar" onPress={() => setIsVDIOpen(false)}> </Button>
               </Modal>
               <Button title="Cloud Computing" onPress={() => setIsModalCCOpen(true)}> </Button>
               <Modal isVisible={isModalCCOpen}>
               <View style={{ height:85, backgroundColor:'#313244'}}>
                <Text style={{color:'#94e2d5'}}> Los servicios en la nube también pueden proporcionar capacidades de cliente ligero,
                   permitiendo acceder a aplicaciones y recursos a través de internet sin requerir recursos locales significativos.</Text>
                </View>
                <Button title="Cerrar" onPress={() => setIsModalCCOpen(false)}> </Button>
               </Modal>
            </View>
            <Button title="Cerrar" onPress={() => setIsModalTecnologiasOpen(false)}> </Button>
            </Modal>

          <View style={{margin:10}}></View>
          <Button title="Tecnologías emergente" onPress={ () => setIsModalTecEmergentesOpen(true)}></Button>
          <Modal isVisible={isModalTecEmergentesOpen}>
          <View style={{height: '85%',width:'100%', backgroundColor:'#313244'}}>
            <View style={{height:'10%'}}></View>
            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#f5e0dc', textAlign:'center', marginTop:'5%',fontSize:24}}> 5G</Text>
              </TouchableOpacity>
            )}>
              <View style={{ height:100, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
            <Text style={{color:'#a6e3a1'}}> 
            Smartphones</Text>
            <Text style={{color:'#a6e3a1'}}> La quinta generación de tecnología de telefonía móvil, 
            que promete velocidades de conexión significativamente más rápidas, menor latencia y capacidad para manejar una mayor cantidad de dispositivos conectados. </Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>

            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#f5e0dc', textAlign:'center', marginTop:'5%',fontSize:24}}>  Edge Computing</Text>
              </TouchableOpacity>
            )}>
              <View style={{ height:70, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
                <Text style={{color:'#a6e3a1'}}> Procesamiento de datos más cerca del lugar donde se generan, 
                lo que reduce la latencia y permite aplicaciones que requieren una respuesta rápida, como la realidad virtual y aumentada. </Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>

            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#f5e0dc', textAlign:'center', marginTop:'5%',fontSize:24}}>   Internet de las cosas (IoT)</Text>
              </TouchableOpacity>
            )}>
            <View style={{ height:70, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
                <Text style={{color:'#a6e3a1'}}>La interconexión de dispositivos cotidianos a través de internet,
                 lo que permite la recopilación de datos, automatización y control remoto de dispositivos.</Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>

            <Popover from={(
              <TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'#f5e0dc', textAlign:'center', marginTop:'5%',fontSize:24}}>  Inteligencia Artificial (IA) aplicada</Text>
              </TouchableOpacity>
            )}>
           <View style={{ height:85, backgroundColor:'#313244'}}>
                <View style={{marginTop:10}}></View>
                <Text style={{color:'#a6e3a1'}}>La integración de IA en dispositivos móviles está en aumento, 
                permitiendo funciones como reconocimiento de voz, traducción en tiempo real, asistentes virtuales y personalización de servicios. </Text>
            </View>
            </Popover>
            <View style={{height:'15%'}}></View>
            </View>
            <Button title="Cerrar" onPress={() => setIsModalTecEmergentesOpen(false)}> </Button>
            </Modal>

        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#24273a'},
    buttons: {flex: 1},
    title: {
      marginTop: 16,
      marginBottom: 16,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
  
  export default Tema1;