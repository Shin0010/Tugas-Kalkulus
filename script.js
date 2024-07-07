function solveEquation() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers for a and b.");
        return;
    }

    var steps = "";
    var stepss = "";

    // Solving a linear equation
    steps += "<=> " + a + "x + " + b + " = 0 \n";
    steps += "<=> " + a + "x = " + (-b) + "\n";
    steps += "<=> x = " + (-b) + " / " + a + "\n";
    steps += "<=> x = " + (-b / a) + "\n";

    // Solving a quadratic equation
    var aa = 2; // Example values for quadratic equation
    var bb = 5;
    var cc = 3;
    var dd = 1;

    stepss += "<=> " + aa + "x " + " > " + cc + "(x - " + dd + ")\n";
    stepss += "<=> " + aa + "x " + " > " + cc + "x - " + (cc * dd) + "\n";
    stepss += "<=> " + (cc * dd) + " > " + (aa - cc) + "x\n";
    stepss += "<=> " + (cc * dd) + " > " + (aa - cc) + "\n";

    // Displaying steps
    var stepsDiv = document.getElementById('steps');
    stepsDiv.textContent = "Linear Equation Steps:\n" + steps + "\nQuadratic Equation Steps:\n" + stepss;
}
