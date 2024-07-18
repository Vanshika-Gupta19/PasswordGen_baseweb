import React from 'react';
import { useState } from 'react';
import {Card} from "baseui/card";
import {Button} from "baseui/button";
import { Input } from 'baseui/input';
import {Checkbox} from 'baseui/checkbox';
import {Slider} from 'baseui/slider';

const PasswordGen = () => {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState([8]);
  const [includeDigits, setIncludeDigits] = useState(true);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(true);
  const [includeUpperCharacter, setIncludeUpperCharacter] = useState(true);
  const [includeLowerCharacter, setincludeLowerCharacter] = useState(true);

    const generatePassword = ()=>{
        const lowerCharacter = 'abcdefghijklmnopqrstuvwxyz';
        const upperCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const specialCharacter = '@#!$%&^';
        const digits = '1234567890';

        let passwordSet = '';

        if(includeUpperCharacter){
          passwordSet+=upperCharacter;
        }

        if(includeLowerCharacter){
          passwordSet+=lowerCharacter;
        }

        if(includeDigits){
          passwordSet+=digits;
        }
        if(includeSpecialCharacter){
          passwordSet+=specialCharacter;
        }

        let currentPassword = '';
        for(let i=0 ; i<passwordLength; i++){
            const randomIndex = Math.floor(Math.random()* passwordSet.length);
            currentPassword += passwordSet[randomIndex];
        }
        setPassword(currentPassword) 
    }
  return (
    <>
     <Card title = "Password Generator" 
     overrides={{
    Root: {
      style: {
        width: "300px",
        margin: "auto",
        backgroundColor: "#4B9CD3"
      },
    }
  }}>
      <Input
      value={password}
      onChange={e => setPassword(e.target.value)}
      placeholder="Generate Password"
      overrides={{
        InputContainer: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.white}`,
            backgroundColor: $theme.colors.white
          })
        },
        Root: {
            style: ({ $theme }) => ({
              outline: `${$theme.colors.white} solid`
            })
          }
      }}
      />
      <Slider
            value={passwordLength}
            onChange={({ value }) => value && setPasswordLength(value)}
            min={8} 
            max={20} 
            step={1}
            />
    <Button onClick={generatePassword} style={{marginLeft: "40px" , marginTop: "15px", marginBottom: "15px"}}>Generate Password</Button>
    <Checkbox checked={includeUpperCharacter} onChange={() => setIncludeUpperCharacter(!includeUpperCharacter)}
        overrides={{
            Checkmark: {
              style: ({ $theme }) => ({
                outline: `${$theme.colors.black} solid`,
                backgroundColor: $theme.colors.black
              })
            }
          }}>
            <span style={{color: "white"}}>Include Uppercase Character</span>
            </Checkbox>

    <Checkbox checked={includeLowerCharacter} onChange={() => setincludeLowerCharacter(!includeLowerCharacter)}
        overrides={{
            Checkmark: {
              style: ({ $theme }) => ({
                outline: `${$theme.colors.black} solid`,
                backgroundColor: $theme.colors.black
              })
            }
          }}>
            <span style={{color: "white"}}>Include Lowercase Character</span> </Checkbox>

    <Checkbox checked={includeDigits} onChange={() => setIncludeDigits(!includeDigits)}
        overrides={{
            Checkmark: {
              style: ({ $theme }) => ({
                outline: `${$theme.colors.black} solid`,
                backgroundColor: $theme.colors.black
              })
            }
          }}>
            <span style={{color: "white"}}>Include digits</span></Checkbox>

    <Checkbox checked={includeSpecialCharacter} onChange={() => setIncludeSpecialCharacter(!includeSpecialCharacter)}
        overrides={{
            Checkmark: {
              style: ({ $theme }) => ({
                outline: `${$theme.colors.black} solid`,
                backgroundColor: $theme.colors.black,
              })
            }
          }}>
            <span style={{color: "white"}}>Include Special Character</span></Checkbox>
    </Card>
    </>
  )
}

export default PasswordGen
