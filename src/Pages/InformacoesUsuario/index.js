import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Container, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { setUser, setWelcomeMessage } from '../../actions/diagnosticoActions';
import { FormLabel, Headings } from '../../layout/style';

export default function InformacoesPessoais() {
    const dispatch = useDispatch()

    async function atualizarDados(e) {
        e.preventDefault();
        const user = {
            nome: e.target.nome.value,
            idade: e.target.idade.value,
            genero: e.target.genero.value
        }

        await dispatch(setUser(user))
        dispatch(setWelcomeMessage(user))

    }

    return (
        <>
            
            <div className='row d-flex justify-content-center' >
               
                    <Col sm={4}>
                        <Headings>Primeiro algumas informações pessoais</Headings>
                        <Form onSubmit={atualizarDados} inline>
                            <FormGroup className="my-3 me-sm-2 mb-sm-0">
                                <FormLabel className="me-sm-2" for="name" > Nome completo </FormLabel>
                                <Input id="name" name="nome" placeholder="Digite seu nome" type="text" />
                            </FormGroup>
                            <FormGroup className="my-3 me-sm-2 mb-sm-0">
                                <FormLabel className="me-sm-2" for="age" > Idade </FormLabel>
                                <Input id="age" name="idade" placeholder="Digite sua idade" type="text" />
                            </FormGroup>
                            <FormGroup className="my-3 me-sm-2 mb-sm-0">
                                <FormLabel className="me-sm-2" for="gender" > Gênero </FormLabel>
                                <Input id="gender" name="genero" type="select" >
                                    <option>
                                        Feminino
                                    </option>
                                    <option>
                                        Masculino
                                    </option>
                                    <option>
                                        Não-binário
                                    </option>
                                </Input>
                            </FormGroup>
                            <Button className='mt-2' type="submit"> Próximo </Button>
                        </Form>
                    </Col>

            </div>
        </>
    )
}

