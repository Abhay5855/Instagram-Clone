import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Tinderbuttons.css"
function Tinderbuttons() {
    return (
        <div className="TinderButtons">

        <IconButton className="replay">
        <ReplayIcon fontSize="large"/>
        </IconButton>

        <IconButton className="clear">
        <ClearIcon fontSize="large"/>
        </IconButton>

        <IconButton className="star">
        <StarIcon fontSize="large"/>
        </IconButton>

        <IconButton className="favor">
        <FavoriteIcon fontSize="large"/>
        </IconButton>
          
        

        
         
         

        


         







            
        </div>
    )
}

export default Tinderbuttons
