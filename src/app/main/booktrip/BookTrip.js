import React, {Component} from 'react';
import {withStyles, Typography} from '@material-ui/core';
import {FusePageSimple, BookContent, FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';

const styles = theme => ({
    layoutRoot: {}
});

class BookTrip extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                        <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                            <FuseAnimate animation="transition.expandIn" delay={300}>
                                <img className="w-40 h-40" src="assets/images/logos/fuse.svg" alt="logo"/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                <Typography className="md:ml-24" variant="h4" color="inherit">Remisería UADE
                                </Typography>
                            </FuseAnimate>
                        </div>

                        <div className="flex items-center justify-end">
                            <Link className="mr-8 normal-case" variant="contained" color="secondary" aria-label="Follow" to="/firstpage">Inicio</Link>
                            <Link className="normal-case" variant="contained" color="primary" aria-label="Send Message" to="/login">Panel de control</Link>
                        </div>
                    </div>
                }
                content={
                    <div className="p-24">
                        <BookContent/>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(BookTrip);