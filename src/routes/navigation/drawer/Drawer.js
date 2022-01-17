import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import frontfrog from '../../../scenes/frontfrog'
import bluefrog from '../../../scenes/bluefrog'
import yellowfrog from '../../../scenes/yellowfrog'
import greenfrog from '../../../scenes/greenfrog'
import backfrog from '../../../scenes/backfrog'
import rightfrog from '../../../scenes/rightfrog'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home!" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home!" component={TabNavigator} />
        <Drawer.Screen name="Lista Samochodów" component={frontfrog} />
        <Drawer.Screen name="Wykonaj Zdjęcie" component={bluefrog} />
        <Drawer.Screen name="yellowfrog" component={yellowfrog} />
        <Drawer.Screen name="greenfrog" component={greenfrog} />
        <Drawer.Screen name="backfrog" component={backfrog} />
        <Drawer.Screen name="rightfrog" component={rightfrog} />
  </Drawer.Navigator>
)

export default DrawerNavigator
