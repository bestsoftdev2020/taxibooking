import React, {Component} from 'react';
import {withStyles, Card, CardContent, Divider, CardHeader} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import {Icon} from '@material-ui/core';
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

    cardStyle : {
        placeContent: 'center',
        display: 'flex',
    },
    
    cardHeaderStyle : {
        textAlign : 'center',
    },
    
    dividerStyle : {
        height : 2,
        marginBottom : 20,
    },
    
    driverCard : {
        width: '100%',
        height: '40px',
        borderRadius: '6px',
    },
    
    buttonStyle : {
        width : '50%',
        margin : 30,
    },

    cardDiv : {
        width : '60%',
    },

    iconDivRight : {
        placeSelf : 'center',
        marginLeft : '15px',
    },
    
    iconDiv : {
        placeSelf : 'center',
    },

    totalDiv : {
        display: 'inline-flex',
        width: '100%',
        placeContent: 'center',
    },

    arrowIcon : {
        marginTop : '2px',
        fontSize : '5rem !important',
    },

    arrowIcon1 : {
        marginTop : '2px',
        fontSize : '5rem !important',
        color : '#E0E0E0',
    },
});

class DriverDisplay extends Component {
    state = {
        driver_data : [],
    };

    handleDelete(id){
        this.props.history.push('/driveredit?id='+id) ;
    }

    setData() {
        fetch(API_URL+'getdrivers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => {
            if(json.success){
                this.setState({
                    driver_data : json.driverdata,
                });
            }
            else {
                alert("Data loading failed!") ;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentWillMount() {
        this.setData() ;
    }

    leftClick(id,status) {
        var temp = status - 1;
        if(temp === 0)
            temp = 3 ;
        
        fetch(API_URL+'changestatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id:id,
                status:temp,
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.success){
                this.setData() ;
            }
            else {
                alert("Data loading failed!") ;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    rightClick(id,status) {
        var temp = status + 1;
        if(temp === 4)
            temp = 1 ;

        fetch(API_URL+'changestatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id:id,
                status:temp,
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.success){
                this.setData() ;
            }
            else {
                alert("Data loading failed!") ;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    newDriver = () => {
        this.props.history.push('/driveradd') ;
    }

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className={classes.cardStyle}>


                    <Card className={classNames(classes.card,"w-full max-w-384 m-h-500")}>

                        <CardHeader title="Disponible" className={classes.cardHeaderStyle}/>
                        <Divider variant="middle" className={classes.dividerStyle}/>
                        <CardContent className="flex flex-col items-center justify-center p-32 text-center">

                            {this.state.driver_data.map(item => {
                                if(item.status === 1) {
                                    return (
                                        <div key={item.id} className={classes.totalDiv}>
                                            <div className={classes.iconDiv}><Icon className={classNames(classes.arrowIcon,"text-20")} color="primary" onClick={() => {this.leftClick(item.id,item.status);}}>arrow_left</Icon></div>
                                            <div className={classes.cardDiv}>
                                                <Chip
                                                    label={item.first_name+' '+item.last_name}
                                                    onDelete={ () => {this.handleDelete(item.id);}}
                                                    className={classNames(classes.chip,classes.driverCard)}
                                                    color="primary"
                                                    deleteIcon={<EditIcon />}
                                                />
                                            </div>
                                            <div className={classes.iconDivRight}><Icon className={classNames(classes.arrowIcon,"text-20")} color="primary" onClick={() => {this.rightClick(item.id,item.status);}}>arrow_right</Icon></div>
                                        </div>) ;
                                }
                                else {
                                    return '' ;
                                }
                            })}

                        </CardContent>
                    </Card>

                    <Card className={classNames(classes.card,"w-full max-w-384 m-h-500")}>

                        <CardHeader title="En viaje" className={classes.cardHeaderStyle}/>
                        <Divider variant="middle" className={classes.dividerStyle}/>
                        <CardContent className="flex flex-col items-center justify-center p-32 text-center">

                            {this.state.driver_data.map(item => {
                                if(item.status === 2) {
                                    return (
                                        <div key={item.id} className={classes.totalDiv}>
                                            <div className={classes.iconDiv}><Icon className={classNames(classes.arrowIcon,"text-20")} color="secondary" onClick={() => {this.leftClick(item.id,item.status);}}>arrow_left</Icon></div>
                                            <div className={classes.cardDiv}>
                                                <Chip
                                                    label={item.first_name+' '+item.last_name}
                                                    onDelete={ () => {this.handleDelete(item.id);}}
                                                    className={classNames(classes.chip,classes.driverCard)}
                                                    color="secondary"
                                                    deleteIcon={<EditIcon />}
                                                />
                                            </div>
                                            <div className={classes.iconDivRight}><Icon className={classNames(classes.arrowIcon,"text-20")} color="secondary" onClick={() => {this.rightClick(item.id,item.status);}}>arrow_right</Icon></div>
                                        </div>) ;
                                }
                                else {
                                    return '' ;
                                }
                            })}
                        </CardContent>
                    </Card>

                    <Card className={classNames(classes.card,"w-full max-w-384 m-h-500")}>

                        <CardHeader title="No disponible" className={classes.cardHeaderStyle}/>
                        <Divider variant="middle" className={classes.dividerStyle}/>
                        <CardContent className="flex flex-col items-center justify-center p-32 text-center">
                            {this.state.driver_data.map(item => {
                                if(item.status === 3) {
                                    return (
                                        <div key={item.id} className={classes.totalDiv}>
                                            <div className={classes.iconDiv}><Icon className={classNames(classes.arrowIcon1,"text-20")} color="action" onClick={() => {this.leftClick(item.id,item.status);}}>arrow_left</Icon></div>
                                            <div className={classes.cardDiv}>
                                                <Chip
                                                    label={item.first_name+' '+item.last_name}
                                                    onDelete={ () => {this.handleDelete(item.id);}}
                                                    className={classNames(classes.chip,classes.driverCard)}
                                                    color="default"
                                                    deleteIcon={<EditIcon />}
                                                />
                                            </div>
                                            <div className={classes.iconDivRight}><Icon className={classNames(classes.arrowIcon1,"text-20")} color="action" onClick={() => {this.rightClick(item.id,item.status);}}>arrow_right</Icon></div>
                                        </div>) ;
                                }
                                else {
                                    return '' ;
                                }
                            })}
                        </CardContent>
                    </Card>
                </div>
                <Button variant="contained" color="secondary" className={classNames(classes.button,classes.buttonStyle)} onClick={this.newDriver}>
                    Añadir chofer
                </Button>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(DriverDisplay);
