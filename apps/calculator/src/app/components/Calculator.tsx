import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Typography, CircularProgress } from '@mui/material';
import { ECircleGivenType, EShape, ETriangleGivenType } from '../api/calculatorApi';
import { useCalculator } from '../hooks/useCalculator';
import { SimpleSnackbar } from '@react-app/shared';
import { useNavigate } from 'react-router-dom';


const Calculator = () => {
    const { calculateCircle, calculateTriangle, result, isRequesting, changeCalculation, calculationType, errorMessage, isOpen, handleClose } = useCalculator();

    const [ circumference, setCircumference ] = useState<number | string>("");
    const [ base, setBase ] = useState<number | string>("");
    const [ height, setHeight ] = useState<number | string>("");

    const handleCalculate = async () => {
        if (calculationType === EShape.Circle) {
            await calculateCircle({ circumference: +circumference }, ECircleGivenType.Circumference);
        } else {
            await calculateTriangle({ base: +base, height: +height }, ETriangleGivenType.BaseHeight);
        }
    };

    const handleCalculationChange = (e: any) => {
        changeCalculation(+e.target.value)
    };

    return (
        <Container maxWidth="sm">
           <Typography variant="h4" gutterBottom>
                Calculator
            </Typography>
            <TextField
                select
                label="Select Calculation Type"
                value={calculationType}
                onChange={handleCalculationChange}
                fullWidth
                sx={{ marginBottom: 2 }}
            >
                <MenuItem value={EShape.Triangle + ""}>Triangle Area</MenuItem>
                <MenuItem value={EShape.Circle + ""}>Circle Diameter</MenuItem>
            </TextField>
            {calculationType === (EShape.Triangle) && (
                <>
                <TextField
                    type="number"
                    label="Base (cm)"
                    value={base}
                    onChange={(e) => setBase(e.target.value && parseFloat(e.target.value))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    type="number"
                    label="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value && parseFloat(e.target.value))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                </>
            )}
            {calculationType === (EShape.Circle) && (
            <TextField
                    type="number"
                    label="Circumference (cm)"
                    value={circumference}
                    onChange={(e) => setCircumference(e.target.value && parseFloat(e.target.value))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
            )}
            <Button
                variant="contained"
                onClick={handleCalculate}
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                        '&:disabled': {
                        cursor: 'not-allowed',
                    },
                    marginBottom: "1em"
                }}
                disabled={isRequesting}
            >   Calculate
                {isRequesting &&
                    <CircularProgress
                        size={24}
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '40%',
                            transform: 'translate(-50%, -50%)',
                            color: 'inherit',
                        }}
                    /> 
                }
            </Button>
            <Result result={result} calculationType={calculationType} />
            <SimpleSnackbar open={isOpen} message={errorMessage} handleClose={handleClose} />
        </Container>
    );
};

const Result = ({ result, calculationType }: any) => (
    <Typography variant="body1">
        Result: {result} cm{calculationType === EShape.Triangle ? <sup>2</sup> : ""}
    </Typography>
);

export default Calculator;