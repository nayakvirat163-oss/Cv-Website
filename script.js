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
allClasses.forEach(c => {
    c.secs.forEach(s => {
        for (let i = 1; i <= 40; i++) {
            const id = `${c.num}${s}${String(i).padStart(3, '0')}`;
            studentDB[id] = {
                name: `Student ${id}`,
                password: id,
                class: `${c.num}-${s}`,
                rollNo: String(i).padStart(3, '0'),
                subject: c.sub,
                email: `${id.toLowerCase()}@student.chinmaya.edu`,
                phone: `+91-98765${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}`,
                dob: `200${Math.floor(Math.random() * 3)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
                gender: Math.random() > 0.5 ? 'Male' : 'Female',
                address: `House ${Math.floor(Math.random() * 500) + 1}, Sector ${Math.floor(Math.random() * 20) + 1}, Bokaro`,
                attendance: {
                    present: Math.floor(Math.random() * 5) + 20,
                    absent: Math.floor(Math.random() * 4),
                    total: 25
                },
                marks: {
                    math: Math.floor(Math.random() * 30) + 70,
                    science: Math.floor(Math.random() * 30) + 70,
                    english: Math.floor(Math.random() * 30) + 70,
                    hindi: Math.floor(Math.random() * 30) + 70,
                    social: Math.floor(Math.random() * 30) + 70
                }
            };
        }
    });
});

const baseTT = [
    {
        time: '08:00-09:00',
        mon: { sub: 'Math', t: 'Dr. Sharma' },
        tue: { sub: 'English', t: 'Ms. Chatterjee' },
        wed: { sub: 'Science', t: 'Prof. Banerjee' },
        thu: { sub: 'Hindi', t: 'Mrs. Yadav' },
        fri: { sub: 'Social', t: 'Mr. Das' },
        sat: { sub: 'Computer', t: 'Mr. Gupta' }
    },
    {
        time: '09:00-10:00',
        mon: { sub: 'Science', t: 'Prof. Banerjee' },
        tue: { sub: 'Math', t: 'Dr. Sharma' },
        wed: { sub: 'Hindi', t: 'Mrs. Yadav' },
        thu: { sub: 'English', t: 'Ms. Chatterjee' },
        fri: { sub: 'Math', t: 'Dr. Sharma' },
        sat: { sub: 'Science', t: 'Prof. Banerjee' }
    },
    {
        time: '10:00-11:00',
        mon: { sub: 'English', t: 'Ms. Chatterjee' },
        tue: { sub: 'Social', t: 'Mr. Das' },
        wed: { sub: 'Math', t: 'Dr. Sharma' },
        thu: { sub: 'Science', t: 'Prof. Banerjee' },
        fri: { sub: 'Hindi', t: 'Mrs. Yadav' },
        sat: { sub: 'English', t: 'Ms. Chatterjee' }
    },
    { time: '11:00-11:30', break: true },
    {
        time: '11:30-12:30',
        mon: { sub: 'Hindi', t: 'Mrs. Yadav' },
        tue: { sub: 'Science', t: 'Prof. Banerjee' },
        wed: { sub: 'English', t: 'Ms. Chatterjee' },
        thu: { sub: 'Math', t: 'Dr. Sharma' },
        fri: { sub: 'Computer', t: 'Mr. Gupta' },
        sat: { sub: 'Social', t: 'Mr. Das' }
    },
    {
        time: '12:30-01:30',
        mon: { sub: 'Social', t: 'Mr. Das' },
        tue: { sub: 'Computer', t: 'Mr. Gupta' },
        wed: { sub: 'Social', t: 'Mr. Das' },
        thu: { sub: 'Computer', t: 'Mr. Gupta' },
        fri: { sub: 'English', t: 'Ms. Chatterjee' },
        sat: { sub: 'Art', t: 'Mr. Singh' }
    },
    {
        time: '01:30-02:30',
        mon: { sub: 'PE', t: 'Coach Kumar' },
        tue: { sub: 'Hindi', t: 'Mrs. Yadav' },
        wed: { sub: 'Library', t: 'Librarian' },
        thu: { sub: 'Social', t: 'Mr. Das' },
        fri: { sub: 'Science', t: 'Prof. Banerjee' },
        sat: { sub: 'Assembly', t: 'Principal' }
    }
];

const timetableDB = {};
allClasses.forEach(c => {
    c.secs.forEach(s => {
        timetableDB[`${c.num}-${s}`] = baseTT;
    });
});

const teacherSchedule = {
    'T001': [
        { day: 'Monday', time: '08:00-09:00', class: '6-A', subject: 'Mathematics' },
        { day: 'Monday', time: '09:00-10:00', class: '7-B', subject: 'Mathematics' },
        { day: 'Tuesday', time: '09:00-10:00', class: '8-C', subject: 'Mathematics' },
        { day: 'Wednesday', time: '10:00-11:00', class: '5-A', subject: 'Mathematics' },
        { day: 'Thursday', time: '11:30-12:30', class: '4-A', subject: 'Mathematics' },
        { day: 'Friday', time: '09:00-10:00', class: '9-A', subject: 'Mathematics' }
    ],
    'T002': [
        { day: 'Monday', time: '09:00-10:00', class: '6-B', subject: 'Science' },
        { day: 'Tuesday', time: '11:30-12:30', class: '7-C', subject: 'Science' },
        { day: 'Wednesday', time: '08:00-09:00', class: '8-A', subject: 'Science' },
        { day: 'Thursday', time: '10:00-11:00', class: '5-B', subject: 'Science' },
        { day: 'Friday', time: '01:30-02:30', class: '9-B', subject: 'Science' }
    ],
    'T003': [
        { day: 'Monday', time: '10:00-11:00', class: '6-C', subject: 'English' },
        { day: 'Tuesday', time: '08:00-09:00', class: '7-A', subject: 'English' },
        { day: 'Wednesday', time: '11:30-12:30', class: '8-B', subject: 'English' },
        { day: 'Thursday', time: '09:00-10:00', class: '5-C', subject: 'English' },
        { day: 'Friday', time: '12:30-01:30', class: '9-C', subject: 'English' }
    ]
};

function saveToCookie(name, data, days = 365) {
    try {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(JSON.stringify(data)) + '; expires=' + expires + '; path=/; SameSite=Lax';
        return true;
    } catch (error) {
        console.error('Error saving to cookie:', error);
        return false;
    }
}

function loadFromCookie(name) {
    try {
        const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return value ? JSON.parse(decodeURIComponent(value.pop())) : null;
    } catch (error) {
        console.error('Error loading from cookie:', error);
        return null;
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function saveStudentDB() {
    return saveToCookie('studentDB', studentDB);
}

function saveTeacherDB() {
    return saveToCookie('teacherDB', teacherDB);
}

let assignmentsDB = loadFromCookie('assignmentsDB') || [];
let homeworkDB = loadFromCookie('homeworkDB') || [];
let materialsDB = loadFromCookie('materialsDB') || [];
let announcementsDB = loadFromCookie('announcementsDB') || [
    {
        id: 1,
        title: 'Annual Day Celebration',
        content: 'Annual Day will be celebrated on 15th January 2025. All students are requested to attend.',
        date: '2024-12-01',
        priority: 'high',
        category: 'Event'
    },
    {
        id: 2,
        title: 'Winter Vacation',
        content: 'School will remain closed for winter vacation from 25th December to 5th January.',
        date: '2024-12-10',
        priority: 'medium',
        category: 'Holiday'
    },
    {
        id: 3,
        title: 'Parent Teacher Meeting',
        content: 'PTM scheduled for all classes on 20th December. Please attend.',
        date: '2024-12-15',
        priority: 'high',
        category: 'Meeting'
    }
];
let eventsDB = loadFromCookie('eventsDB') || [
    {
        id: 1,
        name: 'Science Exhibition',
        date: '2025-01-20',
        time: '10:00 AM',
        venue: 'School Auditorium',
        description: 'Annual science exhibition showcasing student projects.',
        registered: 145
    },
    {
        id: 2,
        name: 'Sports Day',
        date: '2025-02-05',
        time: '08:00 AM',
        venue: 'School Ground',
        description: 'Annual sports day with various competitions.',
        registered: 320
    }
];

let currentUser = loadFromCookie('currentUser') || null;
let userType = loadFromCookie('userType') || 'student';
let assignmentIdCounter = loadFromCookie('assignmentIdCounter') || 1;
let currentQuestions = [];
let scrollCount = 0;


const savedStudentDB = loadFromCookie('studentDB');
if (savedStudentDB && Object.keys(savedStudentDB).length > 0) {
    Object.assign(studentDB, savedStudentDB);
}

const savedTeacherDB = loadFromCookie('teacherDB');
if (savedTeacherDB && Object.keys(savedTeacherDB).length > 0) {
    Object.assign(teacherDB, savedTeacherDB);
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Chinmaya Vidyalaya - System Loading...');

    const savedTheme = localStorage.getItem('theme') || 'colorful';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    const themeBtn = document.querySelector(`.theme-btn.${savedTheme}`);
    if (themeBtn) themeBtn.classList.add('active');

    if (currentUser) {
        console.log('✅ Session restored:', currentUser.name);
        document.getElementById('loginPage').classList.add('hidden');
        if (userType === 'student') {
            showStudentDash();
        } else {
            showTeacherDash();
        }
        showToast(`Welcome back, ${currentUser.name}!`, 'success');
    } else {
        console.log('ℹ️ No active session found');
    }

    updateScrollProgress();

    console.log('✅ System loaded successfully');
    console.log('📊 Total Students:', Object.keys(studentDB).length);
    console.log('👨‍🏫 Total Teachers:', Object.keys(teacherDB).length);
    console.log('📝 Total Assignments:', assignmentsDB.length);
    console.log('📚 Total Materials:', materialsDB.length);
    console.log('✏️ Total Homework:', homeworkDB.length);
});

function updateScrollProgress() {
    const scrollableElements = [
        document.querySelector('.dash-content'),
        document.querySelector('.page-content')
    ];

    scrollableElements.forEach(element => {
        if (element && !element.classList.contains('hidden')) {
            element.addEventListener('scroll', () => {
                const scrollTop = element.scrollTop;
                const scrollHeight = element.scrollHeight - element.clientHeight;
                const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                document.getElementById('scrollProgress').style.width = progress + '%';

                const scrollBtn = document.getElementById('scrollToTop');
                const quickAccess = document.getElementById('quickAccess');
                if (scrollTop > 300) {
                    scrollBtn.classList.add('visible');
                    quickAccess.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                    quickAccess.classList.remove('visible');
                }
            });
        }
    });
}

function scrollToTop() {
    const scrollableElement = document.querySelector('.dash-content:not(.hidden), .page-content:not(.hidden)');
    if (scrollableElement) {
        scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showToast(message, type = 'success', duration = 3500) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };

    const icon = icons[type] || icons.info;

    toast.innerHTML = `
                <i class="fas fa-${icon} toast-icon"></i>
                <div style="flex: 1;">${message}</div>
                <i class="fas fa-times toast-close" onclick="this.parentElement.remove()"></i>
            `;

    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }
    }, duration);
}

function openSearch() {
    document.getElementById('searchOverlay').classList.add('active');
    document.getElementById('globalSearchInput').focus();
}

function closeSearch() {
    document.getElementById('searchOverlay').classList.remove('active');
    document.getElementById('globalSearchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function handleGlobalSearch(event) {
    const query = event.target.value.toLowerCase();
    const results = document.getElementById('searchResults');

    if (query.length < 2) {
        results.innerHTML = '';
        return;
    }

    const searchableItems = [
        { name: 'Assignments', page: 'assignments', icon: 'tasks', category: 'Academic' },
        { name: 'Attendance', page: 'attendance', icon: 'calendar-check', category: 'Academic' },
        { name: 'Timetable', page: 'timetable', icon: 'clock', category: 'Schedule' },
        { name: 'Results', page: 'results', icon: 'chart-line', category: 'Academic' },
        { name: 'Study Materials', page: 'studyMaterials', icon: 'book-open', category: 'Resources' },
        { name: 'Homework', page: 'homework', icon: 'clipboard-list', category: 'Academic' },
        { name: 'Fee Payment', page: 'feePayment', icon: 'rupee-sign', category: 'Finance' },
        { name: 'Library', page: 'library', icon: 'book', category: 'Resources' },
        { name: 'Events', page: 'events', icon: 'calendar-alt', category: 'Activities' },
        { name: 'Announcements', page: 'announcements', icon: 'bullhorn', category: 'Information' },
        { name: 'Certificates', page: 'certificates', icon: 'certificate', category: 'Documents' },
        { name: 'My Profile', page: 'profile', icon: 'user', category: 'Personal' },
        { name: 'My Timetable', page: 'myTimetable', icon: 'clock', category: 'Schedule' },
        { name: 'Mark Attendance', page: 'markAttendance', icon: 'user-check', category: 'Academic' },
        { name: 'Create Assignment', page: 'createAssignment', icon: 'plus-circle', category: 'Academic' },
        { name: 'Enter Marks', page: 'enterMarks', icon: 'edit', category: 'Academic' },
        { name: 'Upload Materials', page: 'uploadMaterials', icon: 'upload', category: 'Resources' },
        { name: 'Assign Homework', page: 'assignHomework', icon: 'clipboard-list', category: 'Academic' },
        { name: 'View Reports', page: 'viewReports', icon: 'chart-bar', category: 'Analytics' }
    ];

    const filtered = searchableItems.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        results.innerHTML = `
                    <div class="search-result-item" style="cursor: default;">
                        <i class="fas fa-search"></i>
                        <div>No results found for "${query}"</div>
                    </div>
                `;
    } else {
        results.innerHTML = filtered.map(item => `
                    <div class="search-result-item" onclick="openPage('${item.page}'); closeSearch();">
                        <i class="fas fa-${item.icon}"></i>
                        <div>
                            <div style="font-weight: 600;">${item.name}</div>
                            <div style="font-size: 0.8rem; opacity: 0.7;">${item.category}</div>
                        </div>
                    </div>
                `).join('');
    }
}

function openShortcuts() {
    document.getElementById('shortcutsOverlay').classList.add('active');
}

function closeShortcuts() {
    document.getElementById('shortcutsOverlay').classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    // Ctrl+K for search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    // ? for shortcuts
    if (e.key === '?' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        openShortcuts();
    }
    // Escape to close overlays
    if (e.key === 'Escape') {
        closeSearch();
        closeShortcuts();
    }
    // Ctrl+H for dashboard
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        if (currentUser) backToDashboard();
    }
    // Ctrl+Shift+T for theme toggle
    if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        const themes = ['colorful', 'dark', 'light'];
        const current = localStorage.getItem('theme') || 'colorful';
        const next = themes[(themes.indexOf(current) + 1) % themes.length];
        const themeBtn = document.querySelector(`.theme-btn.${next}`);
        if (themeBtn) themeBtn.click();
    }
    // Ctrl+L for logout
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        if (currentUser) logout();
    }
    // Up arrow pressed twice quickly = scroll to top
    if (e.key === 'ArrowUp') {
        scrollCount++;
        if (scrollCount === 2) {
            scrollToTop();
            scrollCount = 0;
        }
        setTimeout(() => scrollCount = 0, 500);
    }
});

function changeTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    localStorage.setItem('theme', theme);
    //showToast(`Theme changed to ${theme}`, 'success');
}

function selectUserType(type) {
    userType = type;
    document.querySelectorAll('.user-type-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    console.log('📋 User type selected:', type);
}

function handleLogin(e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;

    console.log('🔐 Login attempt:', userId, userType);

    let user = userType === 'student' ? studentDB[userId] : teacherDB[userId];

    if (user && user.password === password) {
        currentUser = { id: userId, ...user };
        saveToCookie('currentUser', currentUser);
        saveToCookie('userType', userType);

        console.log('✅ Login successful:', currentUser.name);

        showToast( '✅ Login successful! Redirecting...', 'success');

        setTimeout(() => {
            document.getElementById('loginPage').classList.add('hidden');
            if (userType === 'student') {
                showStudentDash();
            } else {
                showTeacherDash();
            }
            showToast(`Welcome, ${currentUser.name}!`, 'success');
            updateScrollProgress();
        }, 1000);
    } else {
        console.error('❌ Login failed');
        showToast('loginAlert', '❌ Invalid credentials! Please try again.', 'error');
    }
}

function showAlert(id, msg, type) {
    const alert = document.getElementById(id);
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${msg}`;
    alert.classList.remove('hidden');
    setTimeout(() => alert.classList.add('hidden'), 5000);
}

function showStudentDash() {
    document.getElementById('studentDashboard').classList.remove('hidden');
    document.getElementById('studentWelcome').textContent = `Welcome, ${currentUser.name}!`;
    document.getElementById('studentName').textContent = currentUser.name;
    document.getElementById('studentClass').textContent = `Class ${currentUser.class}${currentUser.subject ? ' - ' + currentUser.subject : ''}`;
    document.getElementById('studentAvatar').textContent = currentUser.name.charAt(0);
    console.log('📚 Student dashboard loaded');
}

function showTeacherDash() {
    document.getElementById('teacherDashboard').classList.remove('hidden');
    document.getElementById('teacherWelcome').textContent = `Welcome, ${currentUser.name}!`;
    document.getElementById('teacherName').textContent = currentUser.name;
    document.getElementById('teacherSubject').textContent = currentUser.subject;
    document.getElementById('teacherAvatar').textContent = currentUser.name.charAt(0);
    console.log('👨‍🏫 Teacher dashboard loaded');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        console.log('👋 Logging out:', currentUser.name);
        currentUser = null;
        deleteCookie('currentUser');
        deleteCookie('userType');
        document.getElementById('studentDashboard').classList.add('hidden');
        document.getElementById('teacherDashboard').classList.add('hidden');
        document.querySelectorAll('.full-page').forEach(p => p.classList.remove('active'));
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('userId').value = '';
        document.getElementById('password').value = '';
        showToast('Logged out successfully', 'success');
        console.log('✅ Logout complete');
    }
}

function openPage(page) {
    console.log('📄 Opening page:', page);
    document.getElementById('studentDashboard').classList.add('hidden');
    document.getElementById('teacherDashboard').classList.add('hidden');
    document.getElementById(page + 'Page').classList.add('active');

    const pageLoaders = {
        'timetable': loadTimetable,
        'myTimetable': loadTeacherTimetable,
        'markAttendance': loadMarkAttendance,
        'attendance': loadStudentAttendance,
        'results': loadStudentResults,
        'homework': loadHomework,
        'studyMaterials': loadMaterials,
        'createAssignment': loadCreateAssignment,
        'assignments': loadStudentAssignments,
        'uploadMaterials': loadUploadMaterials,
        'assignHomework': loadAssignHomework,
        'enterMarks': loadEnterMarks,
        'events': loadEvents,
        'announcements': loadAnnouncements,
        'certificates': loadCertificates,
        'profile': loadProfile,
        'viewReports': loadViewReports,
        'teacherProfile': loadTeacherProfile,
        'library': loadGenericPage,
        'feePayment': loadGenericPage,
        'eDiary': loadEDiary,
    };

    if (pageLoaders[page]) {
        pageLoaders[page](page);
    } else {
        loadGenericPage(page);
    }

    updateScrollProgress();
    document.getElementById('scrollProgress').style.width = '0%';
}

function backToDashboard() {
    console.log('🏠 Returning to dashboard');
    document.querySelectorAll('.full-page').forEach(p => p.classList.remove('active'));
    if (userType === 'student') {
        document.getElementById('studentDashboard').classList.remove('hidden');
    } else {
        document.getElementById('teacherDashboard').classList.remove('hidden');
    }
    updateScrollProgress();
    document.getElementById('scrollProgress').style.width = '0%';
}

function loadTimetable() {
    const tt = timetableDB[currentUser.class];
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-clock"></i> My Timetable</h1>
                            <p style="font-size: 0.85rem;">Class ${currentUser.class}${currentUser.subject ? ' - ' + currentUser.subject : ''}</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="timetable-card">
                        <h2><i class="fas fa-calendar-week"></i> Weekly Schedule</h2>
                        <table class="timetable-table">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

    tt.forEach(p => {
        if (p.break) {
            html += `
                        <tr class="break-row">
                            <td>${p.time}</td>
                            <td colspan="6">
                                <i class="fas fa-coffee"></i> BREAK TIME
                            </td>
                        </tr>
                    `;
        } else {
            html += `<tr><td class="time-slot">${p.time}</td>`;
            ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].forEach(d => {
                html += `
                            <td>
                                <div class="subject-name">${p[d].sub}</div>
                                <div class="teacher-name">${p[d].t}</div>
                            </td>
                        `;
            });
            html += `</tr>`;
        }
    });

    html += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
    document.getElementById('timetablePage').innerHTML = html;
    console.log('📅 Timetable loaded');
}

function loadTeacherTimetable() {
    const schedule = teacherSchedule[currentUser.id] || [];
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-clock"></i> My Teaching Schedule</h1>
                            <p style="font-size: 0.85rem;">${currentUser.subject} Classes</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="timetable-card">
                        <h2><i class="fas fa-chalkboard-teacher"></i> Your Classes (${schedule.length} periods/week)</h2>
                        <table class="timetable-table">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                    <th>Class</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

    schedule.forEach(s => {
        html += `
                    <tr>
                        <td><strong>${s.day}</strong></td>
                        <td class="time-slot">${s.time}</td>
                        <td><strong>${s.class}</strong></td>
                        <td>${s.subject}</td>
                    </tr>
                `;
    });

    html += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
    document.getElementById('myTimetablePage').innerHTML = html;
    console.log('📅 Teacher timetable loaded');
}

function loadMarkAttendance() {
    const classList = [];
    allClasses.forEach(c => c.secs.forEach(s => classList.push(`${c.num}-${s}`)));

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-user-check"></i> Mark Attendance</h1>
                            <p style="font-size: 0.85rem;">Select class (2800 students total)</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <h2><i class="fas fa-users"></i> Select Class</h2>
                        <div class="form-group">
                            <label>Class</label>
                            <select id="attendanceClassSelect" onchange="loadClassStudents(this.value)">
                                <option value="">-- Select Class --</option>
                                ${classList.map(c => `<option value="${c}">Class ${c}</option>`).join('')}
                            </select>
                        </div>
                        <div style="margin-top: 0.9rem; padding: 0.9rem; background: rgba(102,126,234,0.1); border-radius: 12px; font-size: 0.85rem;">
                            <p><i class="fas fa-info-circle"></i> <strong>Date:</strong> ${new Date().toLocaleDateString('en-IN')}</p>
                            <p style="margin-top: 0.5rem;"><i class="fas fa-clock"></i> <strong>Time:</strong> ${new Date().toLocaleTimeString('en-IN')}</p>
                        </div>
                    </div>
                    <div id="studentsList"></div>
                </div>
            `;
    document.getElementById('markAttendancePage').innerHTML = html;
    console.log('✅ Mark attendance page loaded');
}

function loadClassStudents(cls) {
    if (!cls) return;

    const students = Object.values(studentDB).filter(s => s.class === cls);
    console.log(`📋 Loading ${students.length} students from class ${cls}`);

    let html = `
                <div class="card" style="margin-top: 1.3rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h2><i class="fas fa-list"></i> ${cls} Students (${students.length})</h2>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-success btn-small" onclick="markAllPresent('${cls}')">
                                <i class="fas fa-check-double"></i> Mark All Present
                            </button>
                            <button class="btn btn-danger btn-small" onclick="markAllAbsent('${cls}')">
                                <i class="fas fa-times"></i> Mark All Absent
                            </button>
                        </div>
                    </div>
                    <div style="margin-top: 0.9rem;">
                        <div class="student-row" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; font-weight: 700;">
                            <div>Roll</div>
                            <div>Name</div>
                            <div>ID</div>
                            <div>Present</div>
                            <div>Absent</div>
                            <div>%</div>
                            <div>Mark</div>
                        </div>
            `;

    students.forEach(s => {
        const pct = ((s.attendance.present / s.attendance.total) * 100).toFixed(1);
        const sid = Object.keys(studentDB).find(k => studentDB[k] === s);
        html += `
                    <div class="student-row" id="student-${sid}">
                        <div><strong>${s.rollNo}</strong></div>
                        <div>${s.name}</div>
                        <div><small>${sid}</small></div>
                        <div style="color: var(--success);">${s.attendance.present}</div>
                        <div style="color: var(--danger);">${s.attendance.absent}</div>
                        <div><strong>${pct}%</strong></div>
                        <div class="attendance-buttons">
                            <button class="btn btn-success btn-small" onclick="markAtt('${sid}', 'present')">
                                <i class="fas fa-check"></i> P
                            </button>
                            <button class="btn btn-danger btn-small" onclick="markAtt('${sid}', 'absent')">
                                <i class="fas fa-times"></i> A
                            </button>
                        </div>
                    </div>
                `;
    });

    html += `</div></div>`;
    document.getElementById('studentsList').innerHTML = html;
}

function markAtt(studentId, status) {
    const s = studentDB[studentId];
    if (status === 'present') {
        s.attendance.present++;
    } else {
        s.attendance.absent++;
    }
    s.attendance.total++;

    if (saveStudentDB()) {
        showToast(`${s.name} marked ${status.toUpperCase()}`, 'success');
        loadClassStudents(s.class);
        console.log(`✅ Attendance marked: ${s.name} - ${status}`);
    } else {
        showToast('Error saving attendance', 'error');
    }
}

function markAllPresent(cls) {
    if (confirm(`Mark all students of ${cls} as PRESENT?`)) {
        const students = Object.values(studentDB).filter(s => s.class === cls);
        students.forEach(s => {
            s.attendance.present++;
            s.attendance.total++;
        });
        saveStudentDB();
        showToast(`All students marked PRESENT`, 'success');
        loadClassStudents(cls);
    }
}

function markAllAbsent(cls) {
    if (confirm(`Mark all students of ${cls} as ABSENT?`)) {
        const students = Object.values(studentDB).filter(s => s.class === cls);
        students.forEach(s => {
            s.attendance.absent++;
            s.attendance.total++;
        });
        saveStudentDB();
        showToast(`All students marked ABSENT`, 'warning');
        loadClassStudents(cls);
    }
}

function loadStudentAttendance() {
    const att = currentUser.attendance;
    const pct = ((att.present / att.total) * 100).toFixed(1);

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-calendar-check"></i> My Attendance</h1>
                            <p style="font-size: 0.85rem;">Track your attendance record</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value">${att.present}</div>
                            <div class="stat-label">Days Present</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--danger);">
                            <div class="stat-value" style="color: var(--danger);">${att.absent}</div>
                            <div class="stat-label">Days Absent</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--success);">
                            <div class="stat-value" style="color: var(--success);">${pct}%</div>
                            <div class="stat-label">Attendance</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--info);">
                            <div class="stat-value">${att.total}</div>
                            <div class="stat-label">Total Days</div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h2><i class="fas fa-chart-pie"></i> Attendance Visualization</h2>
                        <div style="padding: 2rem; text-align: center;">
                            <div style="display: inline-block; text-align: left;">
                                <div style="margin: 1rem 0;">
                                    <div style="display: inline-block; width: 20px; height: 20px; background: var(--success); border-radius: 4px;"></div>
                                    <span style="margin-left: 0.5rem;">Present: ${att.present} days</span>
                                </div>
                                <div style="margin: 1rem 0;">
                                    <div style="display: inline-block; width: 20px; height: 20px; background: var(--danger); border-radius: 4px;"></div>
                                    <span style="margin-left: 0.5rem;">Absent: ${att.absent} days</span>
                                </div>
                                <div style="margin: 1rem 0;">
                                    <div style="display: inline-block; width: 20px; height: 20px; background: var(--info); border-radius: 4px;"></div>
                                    <span style="margin-left: 0.5rem;">Total: ${att.total} days</span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: ${pct}%;"></div>
                        </div>
                        <p style="text-align: center; margin-top: 1rem; color: var(--text-light);">
                            ${pct >= 75 ? '✅ Good attendance!' : pct >= 60 ? '⚠️ Needs improvement' : '❌ Poor attendance'}
                        </p>
                    </div>
                </div>
            `;
    document.getElementById('attendancePage').innerHTML = html;
    console.log('📊 Student attendance loaded');
}

function loadStudentResults() {
    const marks = currentUser.marks;
    const subjects = Object.keys(marks);
    const total = Object.values(marks).reduce((a, b) => a + b, 0);
    const avg = (total / subjects.length).toFixed(1);
    const grade = avg >= 90 ? 'A+' : avg >= 80 ? 'A' : avg >= 70 ? 'B' : avg >= 60 ? 'C' : avg >= 50 ? 'D' : 'F';

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-chart-line"></i> My Results</h1>
                            <p style="font-size: 0.85rem;">View your academic performance</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value">${total}</div>
                            <div class="stat-label">Total Marks</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--success);">
                            <div class="stat-value" style="color: var(--success);">${avg}%</div>
                            <div class="stat-label">Average</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--info);">
                            <div class="stat-value" style="color: var(--info);">${grade}</div>
                            <div class="stat-label">Grade</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--warning);">
                            <div class="stat-value">${subjects.length}</div>
                            <div class="stat-label">Subjects</div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h2><i class="fas fa-table"></i> Subject-wise Marks</h2>
                        <table class="results-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Subject</th>
                                    <th>Marks Obtained</th>
                                    <th>Total Marks</th>
                                    <th>Percentage</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

    Object.entries(marks).forEach(([sub, mark], idx) => {
        const pct = mark;
        const g = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : pct >= 50 ? 'D' : 'F';
        const gClass = pct >= 90 ? 'grade-a' : pct >= 70 ? 'grade-b' : pct >= 50 ? 'grade-c' : 'grade-d';
        html += `
                    <tr>
                        <td><strong>${idx + 1}</strong></td>
                        <td><strong>${sub.charAt(0).toUpperCase() + sub.slice(1)}</strong></td>
                        <td>${mark}</td>
                        <td>100</td>
                        <td><strong>${mark}%</strong></td>
                        <td><span class="grade-badge ${gClass}">${g}</span></td>
                    </tr>
                `;
    });

    html += `
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="card">
                        <h2><i class="fas fa-trophy"></i> Performance Analysis</h2>
                        <div style="padding: 1rem;">
                            ${subjects.map(sub => {
        const mark = marks[sub];
        return `
                                    <div style="margin-bottom: 1rem;">
                                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                            <strong>${sub.charAt(0).toUpperCase() + sub.slice(1)}</strong>
                                            <span>${mark}%</span>
                                        </div>
                                        <div class="progress-bar-container">
                                            <div class="progress-bar" style="width: ${mark}%;"></div>
                                        </div>
                                    </div>
                                `;
    }).join('')}
                        </div>
                    </div>
                </div>
            `;
    document.getElementById('resultsPage').innerHTML = html;
    console.log('📈 Results loaded');
}

function loadEnterMarks() {
    const classList = [];
    allClasses.forEach(c => c.secs.forEach(s => classList.push(`${c.num}-${s}`)));

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-edit"></i> Enter Marks</h1>
                            <p style="font-size: 0.85rem;">Enter exam marks for students</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <h2><i class="fas fa-list-alt"></i> Select Class & Subject</h2>
                        <div class="form-group">
                            <label>Class</label>
                            <select id="marksClass">
                                <option value="">-- Select Class --</option>
                                ${classList.map(c => `<option value="${c}">Class ${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <select id="marksSubject">
                                <option value="math">Mathematics</option>
                                <option value="science">Science</option>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="social">Social Science</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onclick="loadStudentsForMarks()">
                            <i class="fas fa-users"></i> Load Students
                        </button>
                    </div>
                    <div id="marksStudentsList"></div>
                </div>
            `;
    document.getElementById('enterMarksPage').innerHTML = html;
    console.log('📝 Enter marks page loaded');
}

function loadStudentsForMarks() {
    const cls = document.getElementById('marksClass').value;
    const subject = document.getElementById('marksSubject').value;

    if (!cls) {
        showToast('Please select a class!', 'error');
        return;
    }

    const students = Object.values(studentDB).filter(s => s.class === cls);
    console.log(`📝 Loading marks entry for ${students.length} students`);

    let html = `
                <div class="card" style="margin-top: 1.3rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h2><i class="fas fa-pen"></i> Enter Marks: ${cls} - ${subject.toUpperCase()}</h2>
                        <button class="btn btn-success" onclick="saveAllMarks('${subject}')">
                            <i class="fas fa-save"></i> Save All Marks
                        </button>
                    </div>
                    <div style="margin-top: 1rem;">
                        <div style="display: grid; grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr; gap: 1rem; padding: 0.9rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; font-weight: 700; border-radius: 10px;">
                            <div>Roll</div>
                            <div>Name</div>
                            <div>Current Marks</div>
                            <div>Enter Marks</div>
                            <div>Action</div>
                        </div>
            `;

    students.forEach(s => {
        const sid = Object.keys(studentDB).find(k => studentDB[k] === s);
        html += `
                    <div style="display: grid; grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr; gap: 1rem; padding: 0.8rem; border-bottom: 2px solid var(--border); align-items: center; transition: all 0.3s;" onmouseover="this.style.background='rgba(102,126,234,0.05)'" onmouseout="this.style.background='transparent'">
                        <div><strong>${s.rollNo}</strong></div>
                        <div>${s.name}</div>
                        <div><span class="badge badge-primary">${s.marks[subject] || 0}</span></div>
                        <div>
                            <input type="number" id="mark_${sid}" min="0" max="100" value="${s.marks[subject] || 0}" style="width: 100%; padding: 0.5rem; border: 2px solid var(--border); border-radius: 8px;">
                        </div>
                        <div>
                            <button class="btn btn-success btn-small" onclick="saveMark('${sid}', '${subject}')">
                                <i class="fas fa-save"></i> Save
                            </button>
                        </div>
                    </div>
                `;
    });

    html += `</div></div>`;
    document.getElementById('marksStudentsList').innerHTML = html;
}

function saveMark(studentId, subject) {
    const mark = parseInt(document.getElementById(`mark_${studentId}`).value);
    if (mark < 0 || mark > 100) {
        showToast('Invalid marks! Must be between 0-100', 'error');
        return;
    }
    studentDB[studentId].marks[subject] = mark;
    if (saveStudentDB()) {
        showToast(`Marks saved for ${studentDB[studentId].name}!`, 'success');
        console.log(`✅ Marks saved: ${studentDB[studentId].name} - ${subject}: ${mark}`);
    } else {
        showToast('Error saving marks', 'error');
    }
}

function saveAllMarks(subject) {
    let saved = 0;
    Object.keys(studentDB).forEach(sid => {
        const input = document.getElementById(`mark_${sid}`);
        if (input) {
            const mark = parseInt(input.value);
            if (mark >= 0 && mark <= 100) {
                studentDB[sid].marks[subject] = mark;
                saved++;
            }
        }
    });
    if (saveStudentDB()) {
        showToast(`All marks saved successfully! (${saved} students)`, 'success');
        console.log(`✅ Bulk marks saved: ${saved} students`);
    } else {
        showToast('Error saving marks', 'error');
    }
}

function loadHomework() {
    const hw = homeworkDB.filter(h => h.class === currentUser.class);
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-clipboard-list"></i> My Homework</h1>
                            <p style="font-size: 0.85rem;">View assigned homework</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    if (hw.length === 0) {
        html += `
                    <div class="card" style="text-align: center; padding: 3rem;">
                        <i class="fas fa-clipboard-check" style="font-size: 4rem; color: var(--success); margin-bottom: 1rem;"></i>
                        <h3>No homework assigned yet!</h3>
                        <p style="color: var(--text-light); margin-top: 0.5rem;">Check back later for new assignments</p>
                    </div>
                `;
    } else {
        hw.forEach((h, idx) => {
            html += `
                        <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <span class="badge badge-primary">${h.subject}</span>
                                    <h3 style="margin: 0.5rem 0;">Homework #${idx + 1}</h3>
                                    <p style="margin: 0.7rem 0; line-height: 1.6;">${h.task}</p>
                                    <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-light); margin-top: 1rem;">
                                        <div><i class="fas fa-calendar"></i> Due: ${h.date}</div>
                                        <div><i class="fas fa-user"></i> Assigned by: ${h.by}</div>
                                    </div>
                                </div>
                                <button class="btn btn-success btn-small" onclick="showToast('Homework marked as complete!', 'success')">
                                    <i class="fas fa-check"></i> Mark Complete
                                </button>
                            </div>
                        </div>
                    `;
        });
    }

    html += `</div>`;
    document.getElementById('homeworkPage').innerHTML = html;
    console.log('📚 Homework loaded:', hw.length);
}

function loadAssignHomework() {
    const classList = [];
    allClasses.forEach(c => c.secs.forEach(s => classList.push(`${c.num}-${s}`)));

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-clipboard-list"></i> Assign Homework</h1>
                            <p style="font-size: 0.85rem;">Create homework for students</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <h2><i class="fas fa-plus-circle"></i> Create New Homework</h2>
                        <div class="form-group">
                            <label>Select Class</label>
                            <select id="hwClass">
                                <option value="">-- Select Class --</option>
                                ${classList.slice(0, 10).map(c => `<option value="${c}">Class ${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <input type="text" id="hwSubject" placeholder="e.g., Mathematics">
                        </div>
                        <div class="form-group">
                            <label>Homework Task</label>
                            <textarea id="hwTask" rows="4" placeholder="Enter homework description..."></textarea>
                        </div>
                        <div class="form-group">
                            <label>Due Date</label>
                            <input type="date" id="hwDate">
                        </div>
                        <button class="btn btn-primary" onclick="assignHomework()">
                            <i class="fas fa-paper-plane"></i> Assign Homework
                        </button>
                    </div>
                </div>
            `;
    document.getElementById('assignHomeworkPage').innerHTML = html;
    console.log('✏️ Assign homework page loaded');
}

function assignHomework() {
    const cls = document.getElementById('hwClass').value;
    const sub = document.getElementById('hwSubject').value.trim();
    const task = document.getElementById('hwTask').value.trim();
    const date = document.getElementById('hwDate').value;

    if (!cls || !sub || !task || !date) {
        showToast('Please fill all fields!', 'error');
        return;
    }

    homeworkDB.push({
        id: homeworkDB.length + 1,
        class: cls,
        subject: sub,
        task: task,
        date: date,
        by: currentUser.name,
        assignedOn: new Date().toISOString()
    });

    saveToCookie('homeworkDB', homeworkDB);

    showToast('Homework assigned successfully!', 'success');
    console.log('✅ Homework assigned:', cls, sub);

    // Clear form
    document.getElementById('hwClass').value = '';
    document.getElementById('hwSubject').value = '';
    document.getElementById('hwTask').value = '';
    document.getElementById('hwDate').value = '';
}

function loadMaterials() {
    const mats = materialsDB.filter(m => m.class === currentUser.class);
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-book-open"></i> Study Materials</h1>
                            <p style="font-size: 0.85rem;">Access your study resources</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    if (mats.length === 0) {
        html += `
                    <div class="card" style="text-align: center; padding: 3rem;">
                        <i class="fas fa-book" style="font-size: 4rem; color: var(--info); margin-bottom: 1rem;"></i>
                        <h3>No materials available yet!</h3>
                        <p style="color: var(--text-light); margin-top: 0.5rem;">Check back later for study materials</p>
                    </div>
                `;
    } else {
        mats.forEach((m, idx) => {
            const iconMap = {
                'PDF': 'file-pdf',
                'PPT': 'file-powerpoint',
                'DOC': 'file-word',
                'VIDEO': 'file-video'
            };
            const icon = iconMap[m.type] || 'file';

            html += `
                        <div class="card" style="display: flex; justify-content: space-between; align-items: center; animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 50px; height: 50px; border-radius: 10px; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                    <i class="fas fa-${icon}"></i>
                                </div>
                                <div>
                                    <h3 style="margin: 0;">${m.title}</h3>
                                    <div style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-light);">
                                        <span class="badge badge-primary">${m.subject}</span>
                                        <span style="margin-left: 0.5rem;">${m.type}</span>
                                        <span style="margin-left: 0.5rem;">• By ${m.uploadedBy}</span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-small" onclick="showToast('Downloading ${m.title}...', 'success')">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>
                    `;
        });
    }

    html += `</div>`;
    document.getElementById('studyMaterialsPage').innerHTML = html;
    console.log('📖 Study materials loaded:', mats.length);
}

function loadUploadMaterials() {
    const classList = [];
    allClasses.forEach(c => c.secs.forEach(s => classList.push(`${c.num}-${s}`)));

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-upload"></i> Upload Materials</h1>
                            <p style="font-size: 0.85rem;">Share study materials with students</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <h2><i class="fas fa-cloud-upload-alt"></i> Upload New Material</h2>
                        <div class="form-group">
                            <label>Select Class</label>
                            <select id="materialClass">
                                <option value="">-- Select Class --</option>
                                ${classList.slice(0, 10).map(c => `<option value="${c}">Class ${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <input type="text" id="materialSubject" placeholder="e.g., Mathematics">
                        </div>
                        <div class="form-group">
                            <label>Material Title</label>
                            <input type="text" id="materialTitle" placeholder="e.g., Chapter 5 Notes">
                        </div>
                        <div class="form-group">
                            <label>Material Type</label>
                            <select id="materialType">
                                <option value="PDF">PDF Document</option>
                                <option value="PPT">PowerPoint</option>
                                <option value="DOC">Word Document</option>
                                <option value="VIDEO">Video</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onclick="uploadMaterial()">
                            <i class="fas fa-upload"></i> Upload Material
                        </button>
                    </div>
                </div>
            `;
    document.getElementById('uploadMaterialsPage').innerHTML = html;
    console.log('📤 Upload materials page loaded');
}

function uploadMaterial() {
    const cls = document.getElementById('materialClass').value;
    const sub = document.getElementById('materialSubject').value.trim();
    const title = document.getElementById('materialTitle').value.trim();
    const type = document.getElementById('materialType').value;

    if (!cls || !sub || !title) {
        showToast('Please fill all fields!', 'error');
        return;
    }

    materialsDB.push({
        id: materialsDB.length + 1,
        class: cls,
        subject: sub,
        title: title,
        type: type,
        uploadedBy: currentUser.name,
        date: new Date().toISOString().split('T')[0]
    });

    saveToCookie('materialsDB', materialsDB);

    showToast('Material uploaded successfully!', 'success');
    console.log('✅ Material uploaded:', title);

    // Clear form
    document.getElementById('materialClass').value = '';
    document.getElementById('materialSubject').value = '';
    document.getElementById('materialTitle').value = '';
}

function loadCreateAssignment() {
    const classList = [];
    allClasses.forEach(c => c.secs.forEach(s => classList.push(`${c.num}-${s}`)));

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-plus-circle"></i> Create Assignment</h1>
                            <p style="font-size: 0.85rem;">Create MCQ-based assignments</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <h2><i class="fas fa-file-alt"></i> Assignment Details</h2>
                        <div class="form-group">
                            <label>Assignment Title</label>
                            <input type="text" id="assignmentTitle" placeholder="e.g., Math Quiz - Chapter 5">
                        </div>
                        <div class="form-group">
                            <label>Select Class</label>
                            <select id="assignmentClass">
                                <option value="">-- Select Class --</option>
                                ${classList.slice(0, 10).map(c => `<option value="${c}">Class ${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <input type="text" id="assignmentSubject" placeholder="e.g., Mathematics">
                        </div>
                        <div class="form-group">
                            <label>Time Limit (minutes)</label>
                            <input type="number" id="assignmentTime" value="30" min="10" max="180">
                        </div>
                        <div class="form-group">
                            <label>Total Marks</label>
                            <input type="number" id="assignmentMarks" value="100" min="10" max="200">
                        </div>
                        <h3 style="margin-top: 1.5rem;"><i class="fas fa-question-circle"></i> Questions</h3>
                        <div id="questionsContainer"></div>
                        <div style="display: flex; gap: 0.7rem; margin-top: 0.9rem;">
                            <button class="btn btn-success" style="width: auto;" onclick="addQuestion()">
                                <i class="fas fa-plus"></i> Add Question
                            </button>
                            <button class="btn btn-primary" onclick="publishAssignment()">
                                <i class="fas fa-paper-plane"></i> Publish Assignment
                            </button>
                        </div>
                    </div>
                </div>
            `;
    document.getElementById('createAssignmentPage').innerHTML = html;
    currentQuestions = [];
    console.log('📝 Create assignment page loaded');
}

function addQuestion() {
    const qNum = currentQuestions.length + 1;
    const qId = `q${qNum}`;
    const html = `
                <div class="card" id="${qId}" style="margin-top: 0.9rem; border: 2px solid var(--border);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h4><i class="fas fa-question"></i> Question ${qNum}</h4>
                        <button class="btn btn-danger btn-small" onclick="removeQuestion('${qId}')">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                    <div class="form-group">
                        <label>Question Text</label>
                        <textarea id="${qId}_text" rows="2" placeholder="Enter your question here..."></textarea>
                    </div>
                    <div class="form-group">
                        <label>Options (Select correct answer)</label>
                        ${[0, 1, 2, 3].map(i => `
                            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; align-items: center;">
                                <input type="radio" name="${qId}_correct" value="${i}" style="width: auto;" id="${qId}_radio${i}">
                                <label for="${qId}_radio${i}" style="margin: 0; min-width: 80px;">Option ${String.fromCharCode(65 + i)}:</label>
                                <input type="text" id="${qId}_opt${i}" placeholder="Enter option ${String.fromCharCode(65 + i)}" style="flex: 1;">
                            </div>
                        `).join('')}
                    </div>
                    <div class="form-group">
                        <label>Explanation (Optional)</label>
                        <textarea id="${qId}_explanation" rows="2" placeholder="Provide explanation for the correct answer..."></textarea>
                    </div>
                </div>
            `;
    document.getElementById('questionsContainer').insertAdjacentHTML('beforeend', html);
    currentQuestions.push(qId);
    showToast(`Question ${qNum} added`, 'success');
    console.log('➕ Question added:', qId);
}

function removeQuestion(qId) {
    document.getElementById(qId).remove();
    currentQuestions = currentQuestions.filter(q => q !== qId);
    showToast('Question removed', 'warning');
    console.log('➖ Question removed:', qId);

    // Renumber remaining questions
    currentQuestions.forEach((id, idx) => {
        const card = document.getElementById(id);
        if (card) {
            card.querySelector('h4').innerHTML = `<i class="fas fa-question"></i> Question ${idx + 1}`;
        }
    });
}

function publishAssignment() {
    const title = document.getElementById('assignmentTitle').value.trim();
    const cls = document.getElementById('assignmentClass').value;
    const sub = document.getElementById('assignmentSubject').value.trim();
    const time = parseInt(document.getElementById('assignmentTime').value);
    const marks = parseInt(document.getElementById('assignmentMarks').value);

    if (!title || !cls || !sub || currentQuestions.length === 0) {
        showToast('Please fill all fields and add at least one question!', 'error');
        return;
    }

    const questions = [];
    for (let qId of currentQuestions) {
        const text = document.getElementById(`${qId}_text`).value.trim();
        const opts = [0, 1, 2, 3].map(i => document.getElementById(`${qId}_opt${i}`).value.trim());
        const correct = document.querySelector(`input[name="${qId}_correct"]:checked`);
        const explanation = document.getElementById(`${qId}_explanation`).value.trim();

        if (!text || opts.some(o => !o) || !correct) {
            showToast('Please complete all questions!', 'error');
            return;
        }

        questions.push({
            text,
            options: opts,
            correctAnswer: parseInt(correct.value),
            explanation: explanation || 'No explanation provided'
        });
    }

    assignmentsDB.push({
        id: assignmentIdCounter++,
        title,
        class: cls,
        subject: sub,
        timeLimit: time,
        totalMarks: marks,
        questions,
        createdBy: currentUser.id,
        createdAt: new Date().toISOString()
    });

    saveToCookie('assignmentsDB', assignmentsDB);
    saveToCookie('assignmentIdCounter', assignmentIdCounter);

    showToast('Assignment published successfully!', 'success');
    console.log('✅ Assignment published:', title, questions.length, 'questions');

    // Reset form
    setTimeout(() => loadCreateAssignment(), 1000);
}

function loadStudentAssignments() {
    const myAssignments = assignmentsDB.filter(a => a.class === currentUser.class);
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-tasks"></i> My Assignments</h1>
                            <p style="font-size: 0.85rem;">View and attempt assignments</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content" id="assignmentContent">
            `;

    if (myAssignments.length === 0) {
        html += `
                    <div class="card" style="text-align: center; padding: 3rem;">
                        <i class="fas fa-tasks" style="font-size: 4rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h3>No assignments yet!</h3>
                        <p style="color: var(--text-light); margin-top: 0.5rem;">Check back later for new assignments</p>
                    </div>
                `;
    } else {
        myAssignments.forEach((a, idx) => {
            html += `
                        <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                                        <span class="badge badge-primary">${a.subject}</span>
                                        <span class="badge badge-info">${a.questions.length} Questions</span>
                                        <span class="badge badge-warning">${a.timeLimit} mins</span>
                                    </div>
                                    <h3 style="margin: 0.5rem 0;">${a.title}</h3>
                                    <p style="margin: 0.4rem 0; font-size: 0.9rem; color: var(--text-light);">
                                        Total Marks: ${a.totalMarks} | Created: ${new Date(a.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                                <button class="btn btn-primary btn-small" onclick="attemptAssignment(${a.id})">
                                    <i class="fas fa-pencil-alt"></i> Attempt
                                </button>
                            </div>
                        </div>
                    `;
        });
    }

    html += `</div>`;
    document.getElementById('assignmentsPage').innerHTML = html;
    console.log('📋 Student assignments loaded:', myAssignments.length);
}

function attemptAssignment(id) {
    const a = assignmentsDB.find(x => x.id === id);
    let html = `
                <div class="card" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white;">
                    <h2 style="color: white;"><i class="fas fa-clipboard-check"></i> ${a.title}</h2>
                    <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
                        <div><i class="fas fa-question-circle"></i> ${a.questions.length} Questions</div>
                        <div><i class="fas fa-clock"></i> ${a.timeLimit} Minutes</div>
                        <div><i class="fas fa-star"></i> ${a.totalMarks} Marks</div>
                    </div>
                </div>
            `;

    a.questions.forEach((q, i) => {
        html += `
                    <div class="card" style="animation: fadeInUp 0.5s ease-out ${i * 0.1}s backwards;">
                        <h4><i class="fas fa-circle" style="font-size: 0.5rem; margin-right: 0.5rem;"></i>Question ${i + 1}. ${q.text}</h4>
                        <div style="margin-top: 0.7rem;">
                            ${q.options.map((opt, j) => `
                                <div class="option-box" style="padding: 0.8rem; border: 2px solid var(--border); border-radius: 10px; margin-bottom: 0.5rem; cursor: pointer; transition: all 0.3s;" 
                                     onmouseover="this.style.borderColor='var(--primary)'; this.style.background='rgba(102,126,234,0.05)'" 
                                     onmouseout="if(!this.querySelector('input').checked) { this.style.borderColor='var(--border)'; this.style.background='transparent'; }" 
                                     onclick="selectOpt(${id}, ${i}, ${j})">
                                    <input type="radio" name="q${i}" id="a${id}_q${i}_opt${j}" style="margin-right: 0.5rem;">
                                    <label for="a${id}_q${i}_opt${j}" style="cursor: pointer; user-select: none;">
                                        <strong>${String.fromCharCode(65 + j)}.</strong> ${opt}
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
    });

    html += `
                <div class="card" style="background: var(--bg-light); border: 2px solid var(--primary);">
                    <button class="btn btn-primary" style="width: 100%;" onclick="submitAssignment(${id})">
                        <i class="fas fa-paper-plane"></i> Submit Assignment
                    </button>
                </div>
            `;
    document.getElementById('assignmentContent').innerHTML = html;
    console.log('📝 Attempting assignment:', a.title);
}

function selectOpt(aId, qIdx, optIdx) {
    document.getElementById(`a${aId}_q${qIdx}_opt${optIdx}`).checked = true;
    // Highlight selected option
    document.querySelectorAll(`input[name="q${qIdx}"]`).forEach(radio => {
        const box = radio.closest('.option-box');
        if (radio.checked) {
            box.style.borderColor = 'var(--primary)';
            box.style.background = 'rgba(102,126,234,0.1)';
        } else {
            box.style.borderColor = 'var(--border)';
            box.style.background = 'transparent';
        }
    });
}

function submitAssignment(id) {
    const a = assignmentsDB.find(x => x.id === id);
    let score = 0;
    let correctAnswers = 0;
    let results = [];

    a.questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const selIdx = selected ? parseInt(selected.id.split('opt')[1]) : -1;
        const isCorrect = selIdx === q.correctAnswer;

        if (isCorrect) {
            score++;
            correctAnswers++;
        }

        results.push({
            question: q.text,
            selected: selIdx >= 0 ? q.options[selIdx] : 'Not answered',
            correct: q.options[q.correctAnswer],
            isCorrect: isCorrect,
            explanation: q.explanation
        });
    });

    const pct = ((score / a.questions.length) * 100).toFixed(1);
    const marksObtained = ((score / a.questions.length) * a.totalMarks).toFixed(1);

    // Show results
    let html = `
                <div class="card" style="background: linear-gradient(135deg, ${pct >= 75 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'}, ${pct >= 75 ? '#059669' : pct >= 50 ? '#ea580c' : '#dc2626'}); color: white; text-align: center; padding: 2rem;">
                    <i class="fas fa-${pct >= 75 ? 'trophy' : pct >= 50 ? 'medal' : 'times-circle'}" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                    <h2 style="color: white; font-size: 2rem;">Assignment Completed!</h2>
                    <div style="font-size: 3rem; font-weight: 900; margin: 1rem 0;">${pct}%</div>
                    <p style="font-size: 1.2rem;">Score: ${score}/${a.questions.length} (${marksObtained}/${a.totalMarks} marks)</p>
                </div>
                
                <div class="card">
                    <h3><i class="fas fa-chart-bar"></i> Performance Summary</h3>
                    <div class="stats-grid">
                        <div class="stat-card" style="border-left-color: var(--success);">
                            <div class="stat-value" style="color: var(--success);">${correctAnswers}</div>
                            <div class="stat-label">Correct</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--danger);">
                            <div class="stat-value" style="color: var(--danger);">${a.questions.length - correctAnswers}</div>
                            <div class="stat-label">Incorrect</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--info);">
                            <div class="stat-value" style="color: var(--info);">${pct}%</div>
                            <div class="stat-label">Percentage</div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <h3><i class="fas fa-list-check"></i> Detailed Results</h3>
            `;

    results.forEach((r, idx) => {
        html += `
                    <div style="padding: 1rem; border: 2px solid ${r.isCorrect ? 'var(--success)' : 'var(--danger)'}; border-radius: 10px; margin-bottom: 1rem; background: ${r.isCorrect ? 'rgba(16,185,129,0.05)' : 'rgba(239,68,68,0.05)'};">
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <i class="fas fa-${r.isCorrect ? 'check-circle' : 'times-circle'}" style="color: ${r.isCorrect ? 'var(--success)' : 'var(--danger)'}; font-size: 1.5rem;"></i>
                            <strong>Question ${idx + 1}</strong>
                        </div>
                        <p style="margin: 0.5rem 0;"><strong>Q:</strong> ${r.question}</p>
                        <p style="margin: 0.5rem 0;"><strong>Your Answer:</strong> ${r.selected}</p>
                        <p style="margin: 0.5rem 0; color: var(--success);"><strong>Correct Answer:</strong> ${r.correct}</p>
                        ${r.explanation ? `<p style="margin: 0.5rem 0; padding: 0.5rem; background: rgba(102,126,234,0.1); border-radius: 5px;"><strong>💡 Explanation:</strong> ${r.explanation}</p>` : ''}
                    </div>
                `;
    });

    html += `
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="loadStudentAssignments()">
                    <i class="fas fa-arrow-left"></i> Back to Assignments
                </button>
            `;

    document.getElementById('assignmentContent').innerHTML = html;
    showToast(`Assignment completed! Score: ${pct}%`, pct >= 75 ? 'success' : pct >= 50 ? 'warning' : 'error');
    console.log('✅ Assignment submitted:', score, '/', a.questions.length);
}

// ================================================================
// EVENTS & ANNOUNCEMENTS
// ================================================================

function loadEvents() {
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-calendar-alt"></i> School Events</h1>
                            <p style="font-size: 0.85rem;">Upcoming events and activities</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    eventsDB.forEach((event, idx) => {
        html += `
                    <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                        <div style="display: flex; gap: 1.5rem;">
                            <div style="min-width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                                <div style="font-size: 1.8rem; font-weight: 900;">${new Date(event.date).getDate()}</div>
                                <div style="font-size: 0.8rem; text-transform: uppercase;">${new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                            </div>
                            <div style="flex: 1;">
                                <h3>${event.name}</h3>
                                <p style="margin: 0.5rem 0; color: var(--text-light);">${event.description}</p>
                                <div style="display: flex; gap: 1rem; margin-top: 0.7rem; font-size: 0.85rem;">
                                    <div><i class="fas fa-clock"></i> ${event.time}</div>
                                    <div><i class="fas fa-map-marker-alt"></i> ${event.venue}</div>
                                    <div><i class="fas fa-users"></i> ${event.registered} Registered</div>
                                </div>
                                <button class="btn btn-primary btn-small" style="margin-top: 0.7rem;" onclick="showToast('Registered for ${event.name}!', 'success')">
                                    <i class="fas fa-check"></i> Register
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    });

    html += `</div>`;
    document.getElementById('eventsPage').innerHTML = html;
    console.log('🎉 Events loaded:', eventsDB.length);
}

function loadAnnouncements() {
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-bullhorn"></i> Announcements</h1>
                            <p style="font-size: 0.85rem;">Important school announcements</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    announcementsDB.forEach((ann, idx) => {
        const priorityColors = {
            high: 'var(--danger)',
            medium: 'var(--warning)',
            low: 'var(--info)'
        };
        const priorityIcons = {
            high: 'exclamation-circle',
            medium: 'info-circle',
            low: 'bell'
        };

        html += `
                    <div class="card" style="border-left: 4px solid ${priorityColors[ann.priority]}; animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div style="flex: 1;">
                                <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                                    <span class="badge" style="background: ${priorityColors[ann.priority]}; color: white;">
                                        <i class="fas fa-${priorityIcons[ann.priority]}"></i> ${ann.priority.toUpperCase()}
                                    </span>
                                    <span class="badge badge-info">${ann.category}</span>
                                </div>
                                <h3>${ann.title}</h3>
                                <p style="margin: 0.7rem 0; line-height: 1.6;">${ann.content}</p>
                                <div style="font-size: 0.8rem; color: var(--text-light);">
                                    <i class="fas fa-calendar"></i> ${new Date(ann.date).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    });

    html += `</div>`;
    document.getElementById('announcementsPage').innerHTML = html;
    console.log('📢 Announcements loaded:', announcementsDB.length);
}

function loadCertificates() {
    const certificates = [
        { name: 'Academic Excellence Award', date: '2024-03-15', category: 'Academic' },
        { name: 'Science Olympiad - Gold Medal', date: '2024-02-20', category: 'Competition' },
        { name: 'Best Student Award', date: '2024-01-10', category: 'Achievement' }
    ];

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-certificate"></i> My Certificates</h1>
                            <p style="font-size: 0.85rem;">View your achievements</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    certificates.forEach((cert, idx) => {
        html += `
                    <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                        <div style="display: flex; gap: 1.5rem; align-items: center;">
                            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">
                                🏆
                            </div>
                            <div style="flex: 1;">
                                <span class="badge badge-warning">${cert.category}</span>
                                <h3 style="margin: 0.3rem 0;">${cert.name}</h3>
                                <p style="color: var(--text-light); font-size: 0.85rem;">
                                    <i class="fas fa-calendar"></i> Awarded on ${new Date(cert.date).toLocaleDateString()}
                                </p>
                            </div>
                            <button class="btn btn-primary btn-small" onclick="showToast('Downloading certificate...', 'success')">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>
                    </div>
                `;
    });

    html += `</div>`;
    document.getElementById('certificatesPage').innerHTML = html;
    console.log('🏆 Certificates loaded:', certificates.length);
}

function loadProfile() {
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-user"></i> My Profile</h1>
                            <p style="font-size: 0.85rem;">View and edit your profile</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <div style="text-align: center; margin-bottom: 2rem;">
                            <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: inline-flex; align-items: center; justify-content: center; color: white; font-size: 3rem; font-weight: 900; margin-bottom: 1rem;">
                                ${currentUser.name.charAt(0)}
                            </div>
                            <h2>${currentUser.name}</h2>
                            <p style="color: var(--text-light);">${currentUser.id}</p>
                        </div>
                        
                        <h3><i class="fas fa-info-circle"></i> Personal Information</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Class</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.class}${currentUser.subject ? ' - ' + currentUser.subject : ''}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Roll Number</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.rollNo}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Email</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.email}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Phone</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.phone}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Date of Birth</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.dob}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Gender</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.gender}</div>
                            </div>
                        </div>
                        
                        <h3 style="margin-top: 2rem;"><i class="fas fa-home"></i> Address</h3>
                        <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px; margin-top: 1rem;">
                            <p>${currentUser.address}</p>
                        </div>
                  
                    </div>
                </div>
            `;
    document.getElementById('profilePage').innerHTML = html;
    console.log('👤 Profile loaded');
}

function loadTeacherProfile() {
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-user-tie"></i> My Profile</h1>
                            <p style="font-size: 0.85rem;">Teacher information</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card">
                        <div style="text-align: center; margin-bottom: 2rem;">
                            <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: inline-flex; align-items: center; justify-content: center; color: white; font-size: 3rem; font-weight: 900; margin-bottom: 1rem;">
                                ${currentUser.name.charAt(0)}
                            </div>
                            <h2>${currentUser.name}</h2>
                            <p style="color: var(--text-light);">${currentUser.id}</p>
                        </div>
                        
                        <h3><i class="fas fa-info-circle"></i> Professional Information</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Subject</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.subject}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Qualification</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.qualification}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Email</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.email}</div>
                            </div>
                            <div style="padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                                <div style="color: var(--text-light); font-size: 0.8rem;">Phone</div>
                                <div style="font-weight: 600; margin-top: 0.3rem;">${currentUser.phone}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    document.getElementById('teacherProfilePage').innerHTML = html;
    console.log('👨‍🏫 Teacher profile loaded');
}

function loadViewReports() {
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-chart-bar"></i> Reports & Analytics</h1>
                            <p style="font-size: 0.85rem;">View comprehensive reports</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value">2800</div>
                            <div class="stat-label">Total Students</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--success);">
                            <div class="stat-value" style="color: var(--success);">85.5%</div>
                            <div class="stat-label">Avg Attendance</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--info);">
                            <div class="stat-value" style="color: var(--info);">78.2%</div>
                            <div class="stat-label">Avg Performance</div>
                        </div>
                        <div class="stat-card" style="border-left-color: var(--warning);">
                            <div class="stat-value" style="color: var(--warning);">${assignmentsDB.length}</div>
                            <div class="stat-label">Total Assignments</div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h2><i class="fas fa-file-download"></i> Generate Reports</h2>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
                            <button class="btn btn-primary" onclick="showToast('Generating attendance report...', 'success')">
                                <i class="fas fa-calendar-check"></i> Attendance Report
                            </button>
                            <button class="btn btn-info" onclick="showToast('Generating marks report...', 'success')">
                                <i class="fas fa-chart-line"></i> Marks Report
                            </button>
                            <button class="btn btn-success" onclick="showToast('Generating performance report...', 'success')">
                                <i class="fas fa-trophy"></i> Performance Report
                            </button>
                            <button class="btn btn-warning" onclick="showToast('Generating comprehensive report...', 'success')">
                                <i class="fas fa-file-alt"></i> Comprehensive Report
                            </button>
                        </div>
                    </div>
                </div>
            `;
    document.getElementById('viewReportsPage').innerHTML = html;
    console.log('📊 Reports page loaded');
}

// ================================================================
// GENERIC PAGE LOADER
// ================================================================

function loadGenericPage(page) {
    const titles = {
        feePayment: { title: 'Fee Payment', icon: 'rupee-sign', desc: 'Pay school fees online' },
        library: { title: 'Digital Library', icon: 'book', desc: 'Access e-books and resources' }
    };

    const pageInfo = titles[page] || { title: page, icon: 'info-circle', desc: 'Page information' };

    const html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-${pageInfo.icon}"></i> ${pageInfo.title}</h1>
                            <p style="font-size: 0.85rem;">${pageInfo.desc}</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
                    <div class="card" style="text-align: center; padding: 3rem;">
                        <i class="fas fa-${pageInfo.icon}" style="font-size: 4rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h2>${pageInfo.title}</h2>
                        <p style="margin-top: 1rem; padding: 2rem; background: rgba(102,126,234,0.1); border-radius: 15px; max-width: 500px; margin-left: auto; margin-right: auto;">
                            <i class="fas fa-info-circle"></i> This feature is coming soon! Stay tuned for updates.
                        </p>
                        <button class="btn btn-primary" style="margin-top: 1.5rem; width: auto;" onclick="showToast('Feature under development', 'info')">
                            <i class="fas fa-bell"></i> Notify Me
                        </button>
                    </div>
                </div>
            `;
    document.getElementById(page + 'Page').innerHTML = html;
    console.log('📄 Generic page loaded:', page);
}

// ================================================================
// PASSWORD CHANGE FUNCTIONS
// ================================================================

function openChangePassword() {
    document.getElementById('changePasswordModal').classList.add('active');
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

function closeChangePassword() {
    document.getElementById('changePasswordModal').classList.remove('active');
}

function handleChangePassword(e) {
    e.preventDefault();
    const curr = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const conf = document.getElementById('confirmPassword').value;

    if (curr !== currentUser.password) {
        showAlert('changePasswordAlert', '❌ Current password is incorrect!', 'error');
        return;
    }

    if (newPass.length < 6) {
        showAlert('changePasswordAlert', '❌ New password must be at least 6 characters!', 'error');
        return;
    }

    if (newPass !== conf) {
        showAlert('changePasswordAlert', '❌ Passwords do not match!', 'error');
        return;
    }

    if (userType === 'student') {
        studentDB[currentUser.id].password = newPass;
        saveStudentDB();
    } else {
        teacherDB[currentUser.id].password = newPass;
        saveTeacherDB();
    }

    currentUser.password = newPass;
    saveToCookie('currentUser', currentUser);

    showAlert('changePasswordAlert', '✅ Password changed successfully!', 'success');
    showToast('Password changed successfully!', 'success');

    console.log('✅ Password changed for:', currentUser.id);

    setTimeout(() => closeChangePassword(), 2000);
}

// ================================================================
// UTILITY FUNCTIONS
// ================================================================

function downloadReport() {
    showToast('Generating comprehensive report...', 'info');
    setTimeout(() => {
        showToast('Report generated successfully!', 'success');
    }, 2000);
    console.log('📄 Report generation requested');
}

function printPage() {
    showToast('Preparing page for printing...', 'info');
    setTimeout(() => {
        window.print();
    }, 500);
    console.log('🖨️ Print requested');
}

function refreshData() {
    showToast('Refreshing data...', 'info');
    setTimeout(() => {
        location.reload();
    }, 1000);
    console.log('🔄 Data refresh requested');
}

// ================================================================
// INITIALIZATION & LOGGING
// ================================================================

console.log('════════════════════════════════════════════════════════════');
console.log('🎓 CHINMAYA VIDYALAYA - MEGA SCHOOL MANAGEMENT SYSTEM');
console.log('════════════════════════════════════════════════════════════');
console.log('✅ System Status: READY');
console.log('📊 Total Students:', Object.keys(studentDB).length);
console.log('👨‍🏫 Total Teachers:', Object.keys(teacherDB).length);
console.log('📝 Total Assignments:', assignmentsDB.length);
console.log('📚 Total Materials:', materialsDB.length);
console.log('✏️ Total Homework:', homeworkDB.length);
console.log('📢 Total Announcements:', announcementsDB.length);
console.log('🎉 Total Events:', eventsDB.length);
console.log('🍪 Cookie Persistence: ENABLED');
console.log('🎨 Theme System: ACTIVE');
console.log('⌨️ Keyboard Shortcuts: ENABLED');
console.log('🔍 Global Search: ACTIVE');
console.log('📱 Responsive Design: ENABLED');
console.log('🌓 Dark Theme Support: YES');
console.log('════════════════════════════════════════════════════════════');
console.log('🚀 READY TO USE! Login with any student ID or T001/teacher123');
console.log('════════════════════════════════════════════════════════════');
// Add this anywhere in your script.js
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Switched to ${newTheme} theme`, 'success');
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeIcon) themeIcon.className = 'fas fa-sun theme-icon';
    } else {
        body.classList.remove('dark-theme');
        if (themeIcon) themeIcon.className = 'fas fa-moon theme-icon';
    }
}
// ============================================================
// ADD THESE FUNCTIONS TO YOUR ORIGINAL script.js FILE
// ============================================================

// *** ADD THIS AFTER LINE 200 (after cookie functions) ***
let eventRegistrations = loadFromCookie('eventRegistrations') || {};

// *** ADD THESE 2 FUNCTIONS ANYWHERE IN YOUR SCRIPT ***
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Switched to ${newTheme} theme`, 'success');
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun theme-icon';
        }
    } else {
        body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon theme-icon';
        }
    }
}

// *** REPLACE YOUR loadHomework() function with this ***
function loadHomework() {
    // RELOAD from cookie each time
    homeworkDB = loadFromCookie('homeworkDB') || [];

    const hw = homeworkDB.filter(h => h.class === currentUser.class);
    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-clipboard-list"></i> My Homework</h1>
                            <p style="font-size: 0.85rem;">View assigned homework</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    if (hw.length === 0) {
        html += `
                    <div class="card" style="text-align: center; padding: 3rem;">
                        <i class="fas fa-clipboard-check" style="font-size: 4rem; color: var(--success); margin-bottom: 1rem;"></i>
                        <h3>No homework assigned yet!</h3>
                        <p style="color: var(--text-light); margin-top: 0.5rem;">Check back later for new assignments</p>
                    </div>
                `;
    } else {
        hw.forEach((h, idx) => {
            html += `
                        <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <span class="badge badge-primary">${h.subject}</span>
                                    <h3 style="margin: 0.5rem 0;">Homework #${idx + 1}</h3>
                                    <p style="margin: 0.7rem 0; line-height: 1.6;">${h.task}</p>
                                    <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-light); margin-top: 1rem;">
                                        <div><i class="fas fa-calendar"></i> Due: ${h.date}</div>
                                        <div><i class="fas fa-user"></i> Assigned by: ${h.by}</div>
                                    </div>
                                </div>
                                <button class="btn btn-success btn-small" onclick="showToast('Homework marked as complete!', 'success')">
                                    <i class="fas fa-check"></i> Mark Complete
                                </button>
                            </div>
                        </div>
                    `;
        });
    }

    html += `</div>`;
    document.getElementById('homeworkPage').innerHTML = html;
    console.log('📚 Homework loaded:', hw.length);
}

// *** ADD THIS NEW FUNCTION FOR EVENT REGISTRATION ***
function registerForEvent(eventId) {
    if (!currentUser) {
        showToast('Please login to register!', 'error');
        return;
    }

    if (!eventRegistrations[currentUser.id]) {
        eventRegistrations[currentUser.id] = [];
    }

    if (eventRegistrations[currentUser.id].includes(eventId)) {
        showToast('You are already registered for this event!', 'info');
        return;
    }

    eventRegistrations[currentUser.id].push(eventId);

    const event = eventsDB.find(e => e.id === eventId);
    if (event) {
        event.registered++;
    }

    saveToCookie('eventRegistrations', eventRegistrations);
    saveToCookie('eventsDB', eventsDB);

    showToast('Successfully registered for the event!', 'success');
    loadEvents();
}

// *** REPLACE YOUR loadEvents() function with this ***
function loadEvents() {
    eventsDB = loadFromCookie('eventsDB') || eventsDB;
    eventRegistrations = loadFromCookie('eventRegistrations') || {};

    const userRegistrations = eventRegistrations[currentUser?.id] || [];

    let html = `
                <div class="page-header">
                    <div class="page-header-content">
                        <div>
                            <h1 class="page-title"><i class="fas fa-calendar-alt"></i> School Events</h1>
                            <p style="font-size: 0.85rem;">Upcoming events and activities</p>
                        </div>
                        <button class="btn-back" onclick="backToDashboard()">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div class="page-content">
            `;

    eventsDB.forEach((event, idx) => {
        const isRegistered = userRegistrations.includes(event.id);

        html += `
                    <div class="card" style="animation: fadeInUp 0.5s ease-out ${idx * 0.1}s backwards;">
                        <div style="display: flex; gap: 1.5rem;">
                            <div style="min-width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                                <div style="font-size: 1.8rem; font-weight: 900;">${new Date(event.date).getDate()}</div>
                                <div style="font-size: 0.8rem; text-transform: uppercase;">${new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                            </div>
                            <div style="flex: 1;">
                                <h3>${event.name}</h3>
                                <p style="margin: 0.5rem 0; color: var(--text-light);">${event.description}</p>
                                <div style="display: flex; gap: 1rem; margin-top: 0.7rem; font-size: 0.85rem;">
                                    <div><i class="fas fa-clock"></i> ${event.time}</div>
                                    <div><i class="fas fa-map-marker-alt"></i> ${event.venue}</div>
                                    <div><i class="fas fa-users"></i> ${event.registered} Registered</div>
                                </div>
                                ${isRegistered ? `
                                    <button class="btn btn-success btn-small" style="margin-top: 0.7rem; cursor: default; opacity: 0.8;" disabled>
                                        <i class="fas fa-check-circle"></i> Registered
                                    </button>
                                ` : `
                                    <button class="btn btn-primary btn-small" style="margin-top: 0.7rem;" onclick="registerForEvent(${event.id})">
                                        <i class="fas fa-user-plus"></i> Register
                                    </button>
                                `}
                            </div>
                        </div>
                    </div>
                `;
    });

    html += `</div>`;
    document.getElementById('eventsPage').innerHTML = html;
    console.log('🎉 Events loaded:', eventsDB.length);
}
// ================================================================
// E-DIARY FUNCTION
// ================================================================

// ================================================================
// E-DIARY FUNCTION - REDIRECTS TO ERP WEBSITE
// Replace the existing loadEDiary() function in your script.js with this
// ================================================================

function loadEDiary() {
    // Get student's class number (e.g., "3-A" → "3")
    const classNum = parseInt(currentUser.class.split('-')[0]);

    // Check if student is from class 3-9
    if (classNum >= 3 && classNum <= 9) {
        // Log the redirect
        if (window.LogSystem) {
            LogSystem.info(
                LogSystem.LogCategory.USER,
                'E-Diary redirect to ERP',
                {
                    studentId: currentUser.id,
                    studentName: currentUser.name,
                    class: currentUser.class,
                    targetUrl: 'https://erp.cvbokaro.in/ERP/STUDENTCORNER/IDiary.aspx'
                }
            );
        }

        // Show loading toast
        showToast('Redirecting to E-Diary...', 'info', 2000);

        // Redirect after a short delay
        setTimeout(() => {
            window.open('https://erp.cvbokaro.in/ERP/STUDENTCORNER/IDiary.aspx', '_blank');

            // Go back to dashboard after opening the link
            setTimeout(() => {
                backToDashboard();
            }, 500);
        }, 1000);

    } else {
        // Fallback for students not in class 3-9 (shouldn't happen with your data)
        showToast('E-Diary is only available for classes 3-9', 'warning');
        setTimeout(() => {
            backToDashboard();
        }, 2000);
    }
}

// ================================================================
// ALTERNATIVE VERSION - Direct Immediate Redirect (No Delay)
// Use this if you want instant redirect without any loading screen
// ================================================================

/*
function loadEDiary() {
    const classNum = parseInt(currentUser.class.split('-')[0]);
    
    if (classNum >= 3 && classNum <= 9) {
        // Log the redirect
        if (window.LogSystem) {
            LogSystem.info(LogSystem.LogCategory.USER, 'E-Diary redirect', {
                studentId: currentUser.id,
                class: currentUser.class
            });
        }
        
        // Immediate redirect in new tab
        window.open('https://erp.cvbokaro.in/ERP/STUDENTCORNER/IDiary.aspx', '_blank');
        
        // Return to dashboard
        backToDashboard();
    } else {
        showToast('E-Diary is only available for classes 3-9', 'warning');
        backToDashboard();
    }
}
*/

// ================================================================
// THIRD OPTION - Redirect in Same Tab (Replace Current Page)
// Use this if you want to replace the current page instead of new tab
// ================================================================

/*
function loadEDiary() {
    const classNum = parseInt(currentUser.class.split('-')[0]);
    
    if (classNum >= 3 && classNum <= 9) {
        // Log the redirect
        if (window.LogSystem) {
            LogSystem.info(LogSystem.LogCategory.USER, 'E-Diary redirect', {
                studentId: currentUser.id,
                class: currentUser.class
            });
        }
        
        showToast('Redirecting to E-Diary...', 'info', 1500);
        
        setTimeout(() => {
            window.location.href = 'https://erp.cvbokaro.in/ERP/STUDENTCORNER/IDiary.aspx';
        }, 1500);
    } else {
        showToast('E-Diary is only available for classes 3-9', 'warning');
        backToDashboard();
    }
}
*/
//alert-:
// Modern & clean version that matches your second example's simplicity

function showAlert(message) {
    const overlay = document.getElementById('custom-alert');
    const msgEl   = document.getElementById('alert-message');

    if (!overlay || !msgEl) return;

    msgEl.textContent = message;
    overlay.classList.remove('alert-hidden');
    // Optional: focus the OK button for better accessibility
    overlay.querySelector('.close-btn')?.focus();
}

function hideAlert() {
    const overlay = document.getElementById('custom-alert');
    if (overlay) {
        overlay.classList.add('alert-hidden');
    }
}

// Setup listeners once when page loads
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('custom-alert');
    if (!overlay) return;

    // Click OK button → close
    overlay.querySelector('.close-btn')?.addEventListener('click', hideAlert);

    // Click outside the box (on overlay) → close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideAlert();
        }
    });

    // Optional: close with Escape key (very user-friendly)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('alert-hidden')) {
            hideAlert();
        }
    });
});

// Bonus: shorter alias if you like (like your chor() function)
function chor(message) {
    showAlert(message);
}

// ================================================================
// CONSOLE MESSAGE
// ================================================================
console.log('🔒 Security features enabled');
console.log('✅ Right-click: Disabled');
console.log('✅ Developer tools shortcuts: Disabled');
console.log('✅ Text selection: Limited');
console.log('✅ Copy/Paste: Limited');
console.log('✅ Source viewing: Disabled');
// ========================================
// MINIMAL URL ROUTING - Add to end of script.js
// ========================================

// Store original functions
const _originalHandleLogin = handleLogin;
const _originalLogout = logout;
const _originalOpenPage = openPage;
const _originalBackToDashboard = backToDashboard;
const _originalSelectUserType = selectUserType;

// Enhanced selectUserType with routing
selectUserType = function(type) {
    userType = type;
    document.querySelectorAll('.user-type-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    console.log('📋 User type selected:', type);
    
    // Update URL when switching user type
    if (!currentUser) {
        window.history.replaceState(null, '', '#' + type + '-login');
    }
};

// Enhanced handleLogin with routing
handleLogin = function(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;
    
    console.log('🔐 Login attempt:', userId, userType);
    
    let user = userType === 'student' ? studentDB[userId] : teacherDB[userId];
    
    if (user && user.password === password) {
        currentUser = { id: userId, ...user };
        saveToCookie('currentUser', currentUser);
        saveToCookie('userType', userType);
        
        console.log('✅ Login successful:', currentUser.name);
        showToast('✅ Login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            document.getElementById('loginPage').classList.add('hidden');
            if (userType === 'student') {
                showStudentDash();
                window.location.hash = 'student-dashboard';
            } else {
                showTeacherDash();
                window.location.hash = 'teacher-dashboard';
            }
            showToast(`Welcome, ${currentUser.name}!`, 'success');
            updateScrollProgress();
        }, 1000);
    } else {
        console.error('❌ Login failed');
        showToast('❌ Invalid credentials! Please try again.', 'error');
    }
};

// Enhanced logout with routing
logout = function() {
    if (confirm('Are you sure you want to logout?')) {
        console.log('👋 Logging out:', currentUser.name);
        const wasTeacher = userType === 'teacher';
        currentUser = null;
        deleteCookie('currentUser');
        deleteCookie('userType');
        document.getElementById('studentDashboard').classList.add('hidden');
        document.getElementById('teacherDashboard').classList.add('hidden');
        document.querySelectorAll('.full-page').forEach(p => p.classList.remove('active'));
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('userId').value = '';
        document.getElementById('password').value = '';
        showToast('Logged out successfully', 'success');
        console.log('✅ Logout complete');
        
        window.location.hash = wasTeacher ? 'teacher-login' : 'student-login';
    }
};

// Enhanced openPage with routing
openPage = function(page) {
    console.log('📄 Opening page:', page);
    document.getElementById('studentDashboard').classList.add('hidden');
    document.getElementById('teacherDashboard').classList.add('hidden');
    document.getElementById(page + 'Page').classList.add('active');
    
    // Update URL based on page
    const prefix = userType === 'student' ? 'student' : 'teacher';
    const urlMap = {
        'timetable': 'timetable',
        'myTimetable': 'timetable',
        'markAttendance': 'mark-attendance',
        'attendance': 'attendance',
        'results': 'results',
        'homework': 'homework',
        'studyMaterials': 'study-materials',
        'createAssignment': 'create-assignment',
        'assignments': 'assignments',
        'uploadMaterials': 'upload-materials',
        'assignHomework': 'assign-homework',
        'enterMarks': 'enter-marks',
        'events': 'events',
        'announcements': 'announcements',
        'certificates': 'certificates',
        'profile': 'profile',
        'viewReports': 'view-reports',
        'teacherProfile': 'profile',
        'library': 'library',
        'feePayment': 'fee-payment',
        'eDiary': 'ediary',
        'importStudents': 'import-students'
    };
    
    const urlName = urlMap[page] || page;
    window.location.hash = prefix + '-' + urlName;
    
    const pageLoaders = {
        'timetable': loadTimetable,
        'myTimetable': loadTeacherTimetable,
        'markAttendance': loadMarkAttendance,
        'attendance': loadStudentAttendance,
        'results': loadStudentResults,
        'homework': loadHomework,
        'studyMaterials': loadMaterials,
        'createAssignment': loadCreateAssignment,
        'assignments': loadStudentAssignments,
        'uploadMaterials': loadUploadMaterials,
        'assignHomework': loadAssignHomework,
        'enterMarks': loadEnterMarks,
        'events': loadEvents,
        'announcements': loadAnnouncements,
        'certificates': loadCertificates,
        'profile': loadProfile,
        'viewReports': loadViewReports,
        'teacherProfile': loadTeacherProfile,
        'library': loadGenericPage,
        'feePayment': loadGenericPage,
        'eDiary': loadEDiary,
    };
    
    if (pageLoaders[page]) {
        pageLoaders[page](page);
    } else {
        loadGenericPage(page);
    }
    
    updateScrollProgress();
    document.getElementById('scrollProgress').style.width = '0%';
};

// Enhanced backToDashboard with routing
backToDashboard = function() {
    console.log('🏠 Returning to dashboard');
    document.querySelectorAll('.full-page').forEach(p => p.classList.remove('active'));
    if (userType === 'student') {
        document.getElementById('studentDashboard').classList.remove('hidden');
        window.location.hash = 'student-dashboard';
    } else {
        document.getElementById('teacherDashboard').classList.remove('hidden');
        window.location.hash = 'teacher-dashboard';
    }
    updateScrollProgress();
    document.getElementById('scrollProgress').style.width = '0%';
};

// Handle browser back/forward buttons
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.slice(1);
    
    if (!hash) {
        window.location.hash = 'student-login';
        return;
    }
    
    console.log('Hash changed to:', hash);
    
    // If on login page, just select the right user type
    if (hash === 'student-login' || hash === 'teacher-login') {
        const type = hash.replace('-login', '');
        if (!document.getElementById('loginPage').classList.contains('hidden')) {
            // Already on login page, just switch user type
            const btn = document.querySelector(`.user-type-btn[onclick*="${type}"]`);
            if (btn) btn.click();
        }
        return;
    }
    
    // Check if user is logged in
    if (!currentUser) {
        window.location.hash = 'student-login';
        return;
    }
    
    // Handle dashboard
    if (hash === 'student-dashboard' || hash === 'teacher-dashboard') {
        const dashType = hash.replace('-dashboard', '');
        if (userType !== dashType) {
            window.location.hash = userType + '-dashboard';
            return;
        }
        backToDashboard();
        return;
    }
    
    // Handle pages
    if (hash.startsWith('student-') || hash.startsWith('teacher-')) {
        const parts = hash.split('-');
        const hashType = parts[0];
        
        if (userType !== hashType) {
            window.location.hash = userType + '-dashboard';
            return;
        }
        
        const pageMap = {
            'timetable': userType === 'student' ? 'timetable' : 'myTimetable',
            'mark-attendance': 'markAttendance',
            'attendance': 'attendance',
            'results': 'results',
            'homework': 'homework',
            'study-materials': 'studyMaterials',
            'create-assignment': 'createAssignment',
            'assignments': 'assignments',
            'upload-materials': 'uploadMaterials',
            'assign-homework': 'assignHomework',
            'enter-marks': 'enterMarks',
            'events': 'events',
            'announcements': 'announcements',
            'certificates': 'certificates',
            'profile': userType === 'student' ? 'profile' : 'teacherProfile',
            'view-reports': 'viewReports',
            'library': 'library',
            'fee-payment': 'feePayment',
            'ediary': 'eDiary',
            'import-students': 'importStudents'
        };
        
        const pageName = parts.slice(1).join('-');
        const internalPage = pageMap[pageName];
        
        if (internalPage) {
            _originalOpenPage(internalPage);
        }
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    // Set initial hash if none exists
    if (!window.location.hash) {
        if (currentUser) {
            window.location.hash = userType + '-dashboard';
        } else {
            window.location.hash = 'student-login';
        }
    }
});

console.log('✅ URL Routing Enabled!');
console.log('📍 Available routes:');
console.log('   - #student-login, #teacher-login');
console.log('   - #student-dashboard, #teacher-dashboard');
console.log('   - #student-[page], #teacher-[page]');
// ============================================================
// SESSION PERSISTENCE FIX
// ============================================================
window.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Checking for existing session...');
    
    if (currentUser && userType) {
        console.log('✅ Session found:', currentUser.name, '| Type:', userType);
        
        document.getElementById('loginPage').classList.add('hidden');
        
        if (userType === 'student') {
            showStudentDash();
            if (!window.location.hash || window.location.hash.includes('login')) {
                window.location.hash = 'student-dashboard';
            }
        } else {
            showTeacherDash();
            if (!window.location.hash || window.location.hash.includes('login')) {
                window.location.hash = 'teacher-dashboard';
            }
        }
    } else {
        console.log('ℹ️ No session found');
        if (!window.location.hash || !window.location.hash.includes('login')) {
            window.location.hash = 'student-login';
        }
    }
});

// ============================================================
// CROSS-TAB DATA SYNC (Materials & Homework visible to all)
// ============================================================
window.addEventListener('storage', function(e) {
    if (e.key === 'materialsDB') {
        materialsDB = loadFromCookie('materialsDB') || [];
        console.log('📚 Materials synced from another tab');
        if (document.getElementById('studyMaterialsPage') && 
            document.getElementById('studyMaterialsPage').classList.contains('active')) {
            loadMaterials('studyMaterials');
        }
    }
    
    if (e.key === 'homeworkDB') {
        homeworkDB = loadFromCookie('homeworkDB') || [];
        console.log('📝 Homework synced from another tab');
        if (document.getElementById('homeworkPage') && 
            document.getElementById('homeworkPage').classList.contains('active')) {
            loadHomework('homework');
        }
    }
    
    if (e.key === 'assignmentsDB') {
        assignmentsDB = loadFromCookie('assignmentsDB') || [];
        console.log('📋 Assignments synced from another tab');
    }
});

console.log('✅ Session auto-login enabled!');
console.log('✅ Cross-tab sync enabled!');
