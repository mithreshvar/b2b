
export default function dummmyData() {
    // Function to generate a random phone number
    function generatePhoneNumber() {
        const phoneNumber = '9' + Math.floor(Math.random() * 9000000000 + 1000000000); // Generates a 10-digit number starting with '9'
        return phoneNumber.toString();
    }
    
    // List of sample names and domains
    const names = [
        'Rahul', 'Kishorekumar', 'John', 'Alice', 'Emma', 'Michael', 'Sophia', 'David', 'Olivia', 'James',
        'Sarah', 'Daniel', 'Grace', 'William', 'Ella', 'Matthew', 'Ava', 'Christopher', 'Mia', 'Joseph',
        'Emily', 'Andrew', 'Lily', 'Benjamin', 'Chloe', 'Samuel', 'Sofia', 'Jacob', 'Victoria', 'Lucas'
    ];
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    
    // Generate 300 hardcoded data entries
    const data = [];
    
    for (let i = 0; i < 300; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const email = `${name.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
        const phone = generatePhoneNumber();
    
        const entry = {
        name: name,
        email: email,
        phone: phone,
        };
    
        data.push(entry);
    }
    
    // Print the generated data
    return (data);
}