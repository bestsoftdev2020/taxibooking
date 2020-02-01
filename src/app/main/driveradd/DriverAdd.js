import React, {Component} from 'react';
import {withStyles, Button, InputAdornment, Icon} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import {TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'rc-datepicker/lib/style.css';
import {DatePickerInput } from 'rc-datepicker';
import {API_URL} from '../constants' ;                                                              

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    },

    card: {
        maxWidth: 345,
        marginRight : 50,
        minWidth: 400,
        minHeight: 600,
    },

    chip: {
        margin: theme.spacing.unit,
    },

    xs6Style : {
        width : '100%',
        paddingRight : 10,
    },

    xs6Styledate : {
        width : '100%',
        paddingRight : 10,
        paddingBottom : 15,
    },

    xs12Style : {
        width : '100%',
        paddingRight : 10,
    },

    buttonStyle : {
        backgroundColor : '#dd2c00',
    },

    divStyle : {
        marginTop : 30,
        marginLeft : '20%',
        flexGrow : 1,
    },

    h4Style : {
        margin : '20px',
    },
    
    gridcontainerStyle : {
        placeContent : 'center',
    },

    dateFont : {
        fontSize : '13px',
        paddingLeft : '3px',
    },
});

class DriverAdd extends Component {
    state = {
        canSubmit: false,
        insurdate : new Date(),
        driverdate : new Date(),
        firstname : '',
        lastname : '',
        address : '',
        phone : '',
        email : '',
        car : '',
        carid : '',
        notes : '',
        selectedid : '',
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    AddDriver = () => {
        var insurdate = this.state.insurdate.getFullYear() + '-' + (this.state.insurdate.getMonth() + 1) + '-' + this.state.insurdate.getDate();
        var driverdate = this.state.driverdate.getFullYear() + '-' + (this.state.driverdate.getMonth() + 1) + '-' + this.state.driverdate.getDate();
        fetch(API_URL+'adddriver', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                firstname : this.state.firstname,
                lastname : this.state.lastname,
                address : this.state.address,
                phone : this.state.phone,
                email : this.state.email,
                car : this.state.car,
                carid : this.state.carid,
                notes : this.state.notes,
                insurdate : insurdate,
                driverdate : driverdate,
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.success){
                alert("Successfully added!") ;
                this.props.history.push('/driverdisplay') ;
            }
            else {
                alert("Operation failed!") ;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classes.divStyle}>
                <Grid container item xs={9} className={classes.gridcontainerStyle}>
                    <Typography variant="h4" color="inherit" className={classNames(classes.h4Style,"font-light")}>
                        Añadir chofer
                    </Typography>        
                    <div className="w-full">
                        <Formsy
                            onValidSubmit={this.onSubmit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            ref={(form) => this.form = form}
                            className="flex flex-wrap justify-center w-full"
                        >
                            <Grid item xs={6}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs6Style,"mb-16")}
                                    type="text"
                                    name="firstName"
                                    label="Nombre"
                                    value={this.state.firstname}
                                    onChange={(event)=>{this.setState({firstname:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">person</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs6Style,"mb-16")}
                                    type="text"
                                    name="lastName"
                                    label="Apellido"
                                    value={this.state.lastname}
                                    onChange={(event)=>{this.setState({lastname:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">person</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs12Style,"mb-16")}
                                    type="text"
                                    name="address"
                                    label="Dirección"
                                    value={this.state.address}
                                    onChange={(event)=>{this.setState({address:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">location_city</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs12Style,"mb-16")}
                                    type="text"
                                    name="phonenumber"
                                    label="Teléfono"
                                    value={this.state.phone}
                                    onChange={(event)=>{this.setState({phone:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">phone</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs12Style,"mb-16")}
                                    type="text"
                                    name="email"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={(event)=>{this.setState({email:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">email</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs6Style,"mb-16")}
                                    type="text"
                                    name="car"
                                    label="Auto"
                                    value={this.state.car}
                                    onChange={(event)=>{this.setState({car:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">directions_car</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs6Style,"mb-16")}
                                    type="text"
                                    name="carid" 
                                    label="Patente"
                                    value={this.state.carid}
                                    onChange={(event)=>{this.setState({carid:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">directions_car</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            
                            <Grid item xs={6}>
                                <Typography variant="h6" color="inherit" className={classNames(classes.dateFont,"font-light")}>
                                    Venc. del seguro
                                </Typography> 
                                <DatePickerInput
                                    onChange={(date) => {this.setState({insurdate:date});}}
                                    value={this.state.insurdate}
                                    className={classNames(classes.xs6Styledate,'my-custom-datepicker-component')}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="h6" color="inherit" className={classNames(classes.dateFont,"font-light")}>
                                    Venc. de la licencia
                                </Typography> 
                                <DatePickerInput
                                    onChange={(date) => {this.setState({driverdate:date});}}
                                    value={this.state.driverdate}
                                    className={classNames(classes.xs6Style,'my-custom-datepicker-component')}
                                />
                            </Grid>
              

                            <Grid item xs={12}>
                                <TextFieldFormsy
                                    className={classNames(classes.xs12Style,"mb-16")}
                                    type="text"
                                    name="note"
                                    label="Notas"
                                    multiline
                                    value={this.state.notes}
                                    onChange={(event)=>{this.setState({notes:event.target.value});}}
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" color="action">notes</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className="w-full mx-auto mt-16 normal-case"
                                    aria-label="add"
                                    disabled={!this.state.canSubmit}
                                    value="legacy"
                                    onClick={this.AddDriver}
                                >
                                    Añadir chofer
                                </Button>
                            </Grid>
                        </Formsy>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(DriverAdd);
