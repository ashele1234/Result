import { connect } from 'mongoose'
import React from 'react'

const url ="mongodb://localhost:27017/crudDB"
const DbConfig = async() => {
 try {
    await connect(url)
    console.log('connected to db succesfully 🚀🚀🤣')
  } catch (error) {
    console.log(error)
  }
}
 export default DbConfig
