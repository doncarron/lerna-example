// Do not remove! This allows strong typing to access the environment string across the component.
declare global 
{
    interface Window {
        mitchell: {
            environment: string
        }
    }
}

// The current environment key. Can be changed for testing to whatever.
window.mitchell = {
    environment: 'DEV'
};

export default Window;