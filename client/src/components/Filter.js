import React from 'react'

import styled from 'styled-components'

const StyledForm = styled.form
`display: flex;
align-items: center;`

const Filter = ({ handleFilter }) => {
  return (
    <StyledForm >
      <label htmlFor="price" style={{ color: 'white' }}>Filter by Price</label>
      <select
        native
        id='price'
        onChange={e => handleFilter(e)}
        style={{width: '100px', margin: '10px' }}
      >
        <option value="15" style={{color: 'black '}}>$15+</option>
        <option value="20" style={{color: 'black '}}>$20+</option>
        <option value="25" style={{color: 'black '}}>$25+</option>
      </select>
    </StyledForm>
  )
}

export default Filter