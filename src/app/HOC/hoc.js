const HOC = (Wrapercomp) => {
    // HOC logic, for example:

    // if (!Wrapercomp) {
    //     throw new Error("Wrapercomp is undefined in HOC");
    //  }
  
    return (props) => {
       // Enhance Wrapercomp with additional props or functionality
       return <Wrapercomp {...props} />;
    };
 };
 
 export default HOC;
 