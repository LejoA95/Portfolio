import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ModalInit() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const hasSeenModal = localStorage.getItem('hasSeenModal');
        if (!hasSeenModal) {
            setOpen(true);
        }
    }, []);


    const handleClose = () => {
        setOpen(false);
        localStorage.setItem('hasSeenModal', 'true');
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-init"
                aria-describedby="child-modal-saludo"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-init">Welcome!</h2>
                    <p id="child-modal-saludo">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Continue to Home</Button>
                </Box>
            </Modal>
        </div>
    );
}
