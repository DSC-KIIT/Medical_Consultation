import React from 'react'
import Doctor from './Doctor'
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import DoctorModal from './DoctorModal';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

function Doctors({docs})
{
    //modal
    const [open, setOpen] = React.useState(false);
    const [selectedDoc, selectDoc] = React.useState({});
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
  
    //pagination
    const [activeStep, setActiveStep] = React.useState(0);
    const numDocs = docs.length
    const numPages = Math.ceil(numDocs / 10)
    const docsOnPage = docs.slice(activeStep * 10, (activeStep * 10)+10)
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };

    
    return(
        <div className='jobs'>
            <Navbar />
            <DoctorModal open={open} doc={selectedDoc} handleClose={handleClose}/>
            <div className='numjob'>
                Found {docs.length} doctors
            </div>
            {
                docsOnPage.map(
                    doc=> <Doctor doc={doc} onClick={() =>{
                        handleClickOpen();
                        selectDoc(doc)}}/>
                )
            }
            <div className='pagination'>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                variant="dots"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
                    Next
                <KeyboardArrowRight />
                </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                    </Button>
                }
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <Footer />
        </div>
    );
}
export default Doctors;