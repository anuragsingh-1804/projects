const words = [
    { word: 'HANGMAN', hint: 'A classic word-guessing game.' },
    { word: 'JAVASCRIPT', hint: 'A popular programming language for web development.' },
    { word: 'PROGRAMMING', hint: 'The process of writing computer programs.' },
    { word: 'COMPUTER', hint: 'An electronic device capable of performing various operations.' },
    { word: 'INTERNET', hint: 'A global network connecting millions of computers.' },
    { word: 'CODING', hint: 'The act of writing instructions for a computer to execute.' },
    { word: 'DEVELOPER', hint: 'A person who creates software applications.' },
    { word: 'ALGORITHM', hint: 'A step-by-step procedure for solving a problem.' },
    { word: 'DATA STRUCTURE', hint: 'A way of organizing and storing data for efficient access and modification.' },
    { word: 'COMPILER', hint: 'A program that translates source code into machine code.' },
    { word: 'OPERATING SYSTEM', hint: 'Software that manages computer hardware and provides services for computer programs.' },
    { word: 'DATABASE', hint: 'A structured collection of data stored electronically.' },
    { word: 'NETWORK', hint: 'A group of interconnected computers and other devices.' },
    { word: 'ENCRYPTION', hint: 'The process of converting information into a code to prevent unauthorized access.' },
    { word: 'CYBERSECURITY', hint: 'Measures taken to protect computer systems and networks from cyber attacks.' },
    { word: 'ARTIFICIAL INTELLIGENCE', hint: 'The simulation of human intelligence processes by machines.' },
    { word: 'MACHINE LEARNING', hint: 'A subset of artificial intelligence that enables systems to learn from data.' },
    { word: 'VIRTUALIZATION', hint: 'The creation of a virtual version of a device or resource.' },
    { word: 'CLOUD COMPUTING', hint: 'The delivery of computing services over the internet.' },
    { word: 'BIG DATA', hint: 'Large volumes of structured and unstructured data.' },
    { word: 'INTERNET OF THINGS', hint: 'A network of interconnected devices embedded with sensors and software.' },
    { word: 'BLOCKCHAIN', hint: 'A decentralized, distributed ledger technology.' },
    { word: 'BINARY', hint: 'A number system with a base of 2.' },
    { word: 'BYTE', hint: 'A unit of digital information consisting of 8 bits.' },
    { word: 'BIT', hint: 'The smallest unit of data in a computer.' },
    { word: 'CACHE', hint: 'A hardware or software component that stores data for quick access.' },
    { word: 'API', hint: 'A set of rules and protocols for building and interacting with software applications.' },
    { word: 'INTERFACE', hint: 'A point of interaction between components or systems.' },
    { word: 'GUI', hint: 'A graphical user interface that allows users to interact with electronic devices.' },
    { word: 'FIRMWARE', hint: 'Software that is embedded into hardware devices.' },
    { word: 'KERNEL', hint: 'The core component of an operating system.' },
    { word: 'SCRIPTING', hint: 'The process of writing scripts to automate tasks.' },
    { word: 'DEBUGGING', hint: 'The process of identifying and fixing errors in computer programs.' },
    { word: 'SYNTAX', hint: 'The rules that govern the structure of code in a programming language.' },
    { word: 'SEMANTIC', hint: 'The meaning of code in a programming language.' },
    { word: 'VARIABLE', hint: 'A storage location associated with a symbolic name.' },
    { word: 'FUNCTION', hint: 'A block of code that performs a specific task.' },
    { word: 'CLASS', hint: 'A blueprint for creating objects.' },
    { word: 'OBJECT', hint: 'An instance of a class.' },
    { word: 'METHOD', hint: 'A function that is associated with an object.' },
    { word: 'INHERITANCE', hint: 'The mechanism by which one class acquires the properties and behaviors of another class.' },
    { word: 'POLYMORPHISM', hint: 'The ability of a single interface to represent multiple underlying forms.' },
    { word: 'ABSTRACTION', hint: 'The process of hiding the implementation details and showing only the essential features of an object.' },
    { word: 'ENCAPSULATION', hint: 'The bundling of data and methods that operate on the data into a single unit.' },
    { word: 'RECURSION', hint: 'A programming technique where a function calls itself.' },
    { word: 'STACK', hint: 'A data structure that follows the Last In, First Out (LIFO) principle.' },
    { word: 'QUEUE', hint: 'A data structure that follows the First In, First Out (FIFO) principle.' },
    { word: 'LINKED LIST', hint: 'A linear data structure where elements are stored in separate objects called nodes.' },
    { word: 'TREE', hint: 'A hierarchical data structure consisting of nodes.' },
    { word: 'GRAPH', hint: 'A collection of nodes and edges that connect them.' },
    { word: 'HASHING', hint: 'The process of mapping data of arbitrary size to data of fixed size.' },
    { word: 'SORTING', hint: 'The process of arranging elements in a specific order.' },
    { word: 'SEARCHING', hint: 'The process of finding a specific element within a data structure.' },
    { word: 'COMPLEXITY', hint: 'The analysis of algorithms in terms of the resources they require.' },
    { word: 'COMPILING', hint: 'The process of translating source code into machine code.' },
    { word: 'DEBUGGING', hint: 'The process of identifying and fixing errors in computer programs.' },
    { word: 'TESTING', hint: 'The process of evaluating a system or component to determine whether it meets specified requirements.' },
    { word: 'INTEGRATION', hint: 'The process of combining different software components or subsystems.' },
    { word: 'DEPLOYMENT', hint: 'The process of making a software system available for use.' },
    { word: 'SCALABILITY', hint: 'The ability of a system to handle growing amounts of work.' },
    { word: 'EFFICIENCY', hint: 'The ability to accomplish a task with minimal resources.' },
    { word: 'ACCESSIBILITY', hint: 'The degree to which a system is usable by people with disabilities.' },
    { word: 'USABILITY', hint: 'The degree to which a system is easy to use.' },
    { word: 'MULTITHREADING', hint: 'The ability of a CPU to execute multiple threads concurrently.' },
    { word: 'CONCURRENCY', hint: 'The ability of multiple processes or threads to run simultaneously.' },
    { word: 'PARALLELISM', hint: 'The simultaneous execution of multiple tasks.' },
    { word: 'DISTRIBUTED SYSTEMS', hint: 'A system in which components located on networked computers communicate and coordinate their actions.' },
    { word: 'CLIENT-SERVER', hint: 'A model in which clients request services from servers.' },
    { word: 'PROTOCOL', hint: 'A set of rules governing the exchange of data between devices.' },
    { word: 'TCP/IP', hint: 'A set of protocols used for communication over the internet.' },
    { word: 'HTTP', hint: 'The protocol used for transferring hypertext documents on the World Wide Web.' },
    { word: 'FTP', hint: 'The protocol used for transferring files between a client and server on a network.' },
    { word: 'SMTP', hint: 'The protocol used for sending email messages.' },
    { word: 'UDP', hint: 'A protocol used for sending data over a network.' },
    { word: 'DNS', hint: 'The system that translates domain names to IP addresses.' },
    { word: 'HTML', hint: 'The standard markup language for creating web pages.' },
    { word: 'CSS', hint: 'The language used for describing the presentation of a document written in HTML.' },
    { word: 'JAVASCRIPT', hint: 'A programming language used to create interactive effects within web browsers.' },
    { word: 'PYTHON', hint: 'A high-level programming language known for its simplicity and readability.' },
    { word: 'JAVA', hint: 'A widely used programming language known for its platform independence.' },
    { word: 'C++', hint: 'A programming language known for its efficiency and performance.' },
    { word: 'C#', hint: 'A programming language developed by Microsoft for building a variety of applications.' },
    { word: 'RUBY', hint: 'A dynamic, object-oriented programming language.' },
    { word: 'SWIFT', hint: 'A programming language developed by Apple for iOS and macOS development.' },
    { word: 'KOTLIN', hint: 'A statically typed programming language for the Java Virtual Machine (JVM).' },
    { word: 'GO', hint: 'A statically typed, compiled programming language developed by Google.' },
    { word: 'RUST', hint: 'A systems programming language known for its safety and concurrency features.' },
    { word: 'PERL', hint: 'A high-level, interpreted programming language known for its text processing capabilities.' },
    { word: 'PHP', hint: 'A server-side scripting language used for web development.' },
    { word: 'SQL', hint: 'A domain-specific language used for managing and manipulating relational databases.' },
    { word: 'NOSQL', hint: 'A database model that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.' },
    { word: 'ASSEMBLY LANGUAGE', hint: 'A low-level programming language that is closely related to machine language.' },
    { word: 'SHELL SCRIPTING', hint: 'The process of writing scripts for a command-line interpreter.' },
    { word: 'REGULAR EXPRESSION', hint: 'A sequence of characters that define a search pattern.' },
    { word: 'OBJECT-ORIENTED PROGRAMMING', hint: 'A programming paradigm based on the concept of "objects".' },
    { word: 'FUNCTIONAL PROGRAMMING', hint: 'A programming paradigm that treats computation as the evaluation of mathematical functions.' },
    { word: 'IMPERATIVE PROGRAMMING', hint: 'A programming paradigm that describes computation in terms of statements that change a program state.' },
    { word: 'EVENT-DRIVEN PROGRAMMING', hint: 'A programming paradigm in which the flow of the program is determined by events.' },
    { word: 'ASPECT-ORIENTED PROGRAMMING', hint: 'A programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns.' },
    { word: 'REACTIVE PROGRAMMING', hint: 'A programming paradigm that deals with asynchronous data streams.' },
    { word: 'MICROSERVICES', hint: 'An architectural style that structures an application as a collection of loosely coupled services.' },
    { word: 'RESTFUL', hint: 'A design principle for networked applications.' },
    { word: 'SERVERLESS', hint: 'A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.' },
    { word: 'DEVOPS', hint: 'A set of practices that combines software development (Dev) and IT operations (Ops).' },
    { word: 'CONTINUOUS INTEGRATION', hint: 'A software development practice where members of a team integrate their work frequently.' },
    { word: 'CONTINUOUS DEPLOYMENT', hint: 'A software release process where code changes are automatically deployed to production.' },
    { word: 'AGILE DEVELOPMENT', hint: 'A software development methodology that emphasizes flexibility, collaboration, and customer feedback.' }
];