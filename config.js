const studentDB = {};
const teacherDB = {
    'T001': {
        name: 'Dr. R.K. Sharma',
        password: 'teacher123',
        subject: 'Mathematics',
        email: 'rk.sharma@chinmaya.edu',
        phone: '+91-9876543210',
        qualification: 'Ph.D. Mathematics'
    },
    'T002': {
        name: 'Prof. S. Banerjee',
        password: 'teacher123',
        subject: 'Science',
        email: 's.banerjee@chinmaya.edu',
        phone: '+91-9876543211',
        qualification: 'M.Sc. Physics'
    },
    'T003': {
        name: 'Ms. P. Chatterjee',
        password: 'teacher123',
        subject: 'English',
        email: 'p.chatterjee@chinmaya.edu',
        phone: '+91-9876543212',
        qualification: 'M.A. English'
    },
    'T004': {
        name: 'Mrs. A. Yadav',
        password: 'teacher123',
        subject: 'Hindi',
        email: 'a.yadav@chinmaya.edu',
        phone: '+91-9876543213',
        qualification: 'M.A. Hindi'
    },
    'T005': {
        name: 'Mr. R. Das',
        password: 'teacher123',
        subject: 'Social Science',
        email: 'r.das@chinmaya.edu',
        phone: '+91-9876543214',
        qualification: 'M.A. History'
    }
};

// Generate 2800 students across all classes
const allClasses = [
    { num: '3', secs: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], sub: null },
    { num: '4', secs: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], sub: null },
    { num: '5', secs: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], sub: null },
    { num: '6', secs: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], sub: null },
    { num: '7', secs: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], sub: null },
    { num: '8', secs: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], sub: null },
    { num: '9', secs: ['A', 'B', 'C'], sub: 'Hindi' },
    { num: '9', secs: ['D', 'E', 'F', 'G'], sub: 'Sanskrit' }
];