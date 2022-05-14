import React from 'react'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import {
  Button,
  InputEmail,
  InputPassword,
  H1,
  Space,
  H2,
  H3,
  H4,
  H5,
  Small,
} from '../components'
import FormControl from '../containers/FormControl/FormControl'

export default function Home() {
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    console.log('submit')
  }
  return (
    <div>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth>
        <Space />
        <H1 align="center">به این پروژه ریکتی خوش آمدید</H1>
        <H2 align="center">به این پروژه ریکتی خوش آمدید</H2>
        <H3 align="center">به این پروژه ریکتی خوش آمدید</H3>
        <H4 align="center">به این پروژه ریکتی خوش آمدید</H4>
        <H5 align="center">به این پروژه ریکتی خوش آمدید</H5>
        <Small align="center">به این پروژه ریکتی خوش آمدید</Small>

        <Space />

        <form onSubmit={handleSubmit}>
          <FormControl>
            <InputEmail placeholder="ایمیل" />
          </FormControl>
          <FormControl>
            <InputPassword placeholder="کلمه عبور" />
          </FormControl>
          <FormControl>
            <Button type="submit">وارد شوید</Button>
          </FormControl>
        </form>
      </LayoutAuth>
    </div>
  )
}
