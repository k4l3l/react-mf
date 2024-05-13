import { useState } from "react";
import { getCalculatorApi, EShape, TCalculateProps, ETriangleGivenType, ECircleGivenType } from "../api/calculatorApi";

export const useCalculator = () => {
    const calcApi = getCalculatorApi();

    const [ result, setResult ] = useState("");
    const [ isRequesting, setIsRequesting ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ isOpen, setIsOpen ] = useState(false);
    const [ calculationType, setCalculationType ] = useState(EShape.Triangle);

    const calculateTriangle = async (props: TCalculateProps, type: ETriangleGivenType) => {
        setIsRequesting(true);
        try {
            const res = await calcApi.calculate({ type, shape: EShape.Triangle, props });
            setResult(res.toFixed(2));
        } catch (err) {
            setErrorMessage((err as Error).message);
            setIsOpen(true);
        }
        setIsRequesting(false);
    };

    const calculateCircle = async (props: TCalculateProps, type: ECircleGivenType) => {
        setIsRequesting(true);
        try {
            const res = await calcApi.calculate({ type, shape: EShape.Circle, props });
            setResult(res.toFixed(2));
        } catch (err) {
            setErrorMessage((err as Error).message);
            setIsOpen(true);
        }
        setIsRequesting(false);
    };

    const changeCalculation = (shape: number) => {
        setCalculationType(shape);
        setResult("");
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    return {
        calculateTriangle,
        calculateCircle,
        result,
        isRequesting,
        errorMessage,
        calculationType,
        changeCalculation,
        isOpen,
        handleClose,
    }
};