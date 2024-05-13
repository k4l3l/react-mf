type TCalculateRequest = {
    type: TGivenType,
    shape: EShape,
    props: TCalculateProps
}

export type TCalculateProps = {
    base?: number,
    height?: number,
    circumference?: number,
}

export enum EShape {
    Triangle,
    Circle
}

type TGivenType = ECircleGivenType | ETriangleGivenType;

export enum ETriangleGivenType {
    BaseHeight,
}

export enum ECircleGivenType {
    Circumference,
}

export const getCalculatorApi = () => {
    let serverTimeout: NodeJS.Timeout;
    const calculate = ({ type, shape, props }: TCalculateRequest): Promise<number> => new Promise((resolve, reject) => {
        if (serverTimeout) {
            clearTimeout(serverTimeout);
        }
        serverTimeout = setTimeout(() => {
            try {
                const result = performServerCalculation(type, shape, props);
                resolve(result);
            } catch (err) {
                console.error(err);
                reject(err);
            }
        }, 5000);
    });

    const performServerCalculation = (type: TGivenType, shape: EShape, props: TCalculateProps) => {
        switch (shape) {
            case EShape.Triangle:
                switch (type) {
                    case ETriangleGivenType.BaseHeight:
                        if (!props.base || !props.height) {
                            return _handleIncorrectData("base or height");
                        }
                        return props.base * props.height * 0.5;
                    default:
                        throw new Error("Invalid type given to calculate");
                }
            case EShape.Circle:
                switch (type) {
                    case ECircleGivenType.Circumference:
                        if (!props.circumference) {
                            return _handleIncorrectData("circumference");
                        }
                        return Math.PI * props.circumference;
                    default:
                        throw new Error("Invalid type given to calculate");
                }
            default:
                throw new Error("Invalid shape");
        }
    };

    const _handleIncorrectData = (fieldType: string) => {
        throw new Error(`No ${fieldType} provided`);
    };

    return {
        calculate
    }
}