import React from 'react'
import CocktailList from '../components/CocktailList/CocktailList'
import SearchInput from '../components/SearchInput/SearchInput'

export default function Home() {
  return (
    <>
        <SearchInput />
        <CocktailList />
    </>
  )
}
