// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ===== DATA =====
const IMG_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
const EXERCISES = [
  // CHEST
  {
    id: 1, name: 'Bench Press', group: 'chest', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'หน้าอก (Pectoralis Major)',
    desc: 'ท่าคลาสสิกสำหรับพัฒนากล้ามเนื้อหน้าอกส่วนกลาง ช่วยเพิ่มทั้งความแข็งแรงและมวลกล้ามเนื้อ เหมาะสำหรับทุกระดับ',
    sets: [{label:'Warm-up',val:'2 × 15 @ 40%'},{label:'Working',val:'4 × 8 @ 75%'},{label:'Drop set',val:'1 × Failure'}],
    color: '#7c3aed', emoji: '🏋️', grad: 'linear-gradient(135deg,#3b0764,#1e1b4b)',
    img: IMG_BASE + 'Barbell_Bench_Press_-_Medium_Grip/0.jpg',
  },
  {
    id: 2, name: 'Incline Dumbbell Press', group: 'chest', level: 'ปานกลาง', equip: 'ดัมเบล',
    muscle: 'หน้าอกบน (Upper Chest)',
    desc: 'เน้นพัฒนาหน้าอกส่วนบน ให้รูปทรงหน้าอกที่เต็มและนูนสวยงาม ควบคู่กับการฝึก Bench Press ปกติ',
    sets: [{label:'Set 1',val:'3 × 12'},{label:'Set 2',val:'3 × 10'},{label:'Set 3',val:'3 × 8'}],
    color: '#7c3aed', emoji: '💪', grad: 'linear-gradient(135deg,#2d1b69,#0c0a1e)',
    img: IMG_BASE + 'Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg',
  },
  {
    id: 3, name: 'Cable Flyes', group: 'chest', level: 'ง่าย', equip: 'เคเบิล',
    muscle: 'หน้าอก (Pectoralis)',
    desc: 'ยืดและบีบกล้ามเนื้อหน้าอกได้อย่างเต็มพิสัย เหมาะสำหรับการเพิ่ม definition และ pump ที่ดีเยี่ยม',
    sets: [{label:'Set 1-3',val:'3 × 15'},{label:'Superset',val:'Crossover 3×12'}],
    color: '#7c3aed', emoji: '🦋', grad: 'linear-gradient(135deg,#1e1b4b,#0f172a)',
    img: IMG_BASE + 'Incline_Cable_Flye/0.jpg',
  },
  // BACK
  {
    id: 4, name: 'Pull-up', group: 'back', level: 'ยาก', equip: 'บาร์โหน',
    muscle: 'หลังกว้าง (Latissimus Dorsi)',
    desc: 'ราชาแห่งท่าออกกำลังกายส่วนหลัง สร้าง V-taper ที่โดดเด่น พัฒนาความแข็งแรงแบบฟังก์ชัน',
    sets: [{label:'Set 1',val:'3-5 × Max reps'},{label:'Weighted',val:'3 × 6-8'},{label:'Negatives',val:'3 × 5'}],
    color: '#06b6d4', emoji: '🔝', grad: 'linear-gradient(135deg,#0c4a6e,#0f172a)',
    img: IMG_BASE + 'Wide-Grip_Rear_Pull-Up/0.jpg',
  },
  {
    id: 5, name: 'Barbell Row', group: 'back', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'หลังกลาง (Rhomboids, Mid Traps)',
    desc: 'ท่า compound สำคัญสำหรับความหนาและความแข็งแรงของหลัง คู่กันกับ Bench Press เสมอ',
    sets: [{label:'Warm-up',val:'2 × 12'},{label:'Working',val:'4 × 8 @ 70%'},{label:'Pause',val:'2 × 6 (2s hold)'}],
    color: '#06b6d4', emoji: '🎣', grad: 'linear-gradient(135deg,#164e63,#0f172a)',
    img: IMG_BASE + 'Bent_Over_Barbell_Row/0.jpg',
  },
  {
    id: 6, name: 'Lat Pulldown', group: 'back', level: 'ง่าย', equip: 'เครื่อง',
    muscle: 'หลังกว้าง (Lats)',
    desc: 'ทางเลือกที่ดีสำหรับผู้ที่ยัง Pull-up ไม่ได้ ช่วยพัฒนา lat ให้กว้างและแข็งแรง',
    sets: [{label:'Set 1-4',val:'4 × 12'},{label:'Close grip',val:'2 × 15'}],
    color: '#06b6d4', emoji: '⬇️', grad: 'linear-gradient(135deg,#083344,#0f172a)',
    img: IMG_BASE + 'Wide-Grip_Lat_Pulldown/0.jpg',
  },
  // LEGS
  {
    id: 7, name: 'Barbell Squat', group: 'legs', level: 'ยาก', equip: 'บาร์เบล',
    muscle: 'ต้นขา หน้า+หลัง, สะโพก (Quads, Glutes, Hams)',
    desc: 'ราชาแห่งท่าขา! พัฒนาทั้งความแข็งแรง มวลกล้ามเนื้อ และการเผาผลาญ มากที่สุดในท่าเดียว',
    sets: [{label:'Warm-up',val:'2 × 10'},{label:'Working',val:'5 × 5 @ 80%'},{label:'Back-off',val:'2 × 10 @ 65%'}],
    color: '#10b981', emoji: '🦵', grad: 'linear-gradient(135deg,#064e3b,#0f172a)',
    img: IMG_BASE + 'Wide_Stance_Barbell_Squat/0.jpg',
  },
  {
    id: 8, name: 'Romanian Deadlift', group: 'legs', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'หลังต้นขา, สะโพก (Hamstrings, Glutes)',
    desc: 'เน้นยืด Hamstring และ Glute อย่างเต็มที่ ช่วยพัฒนา posterior chain และป้องกันบาดเจ็บ',
    sets: [{label:'Set 1-4',val:'4 × 10-12'},{label:'Paused',val:'2 × 8 (3s hold)'}],
    color: '#10b981', emoji: '🍑', grad: 'linear-gradient(135deg,#052e16,#0f172a)',
    img: IMG_BASE + 'Romanian_Deadlift/0.jpg',
  },
  {
    id: 9, name: 'Leg Press', group: 'legs', level: 'ง่าย', equip: 'เครื่อง',
    muscle: 'ต้นขาหน้า (Quadriceps)',
    desc: 'เน้น quad overload ได้อย่างปลอดภัย ดีสำหรับ volume สูงเพื่อเพิ่มมวลกล้ามเนื้อ',
    sets: [{label:'Set 1-4',val:'4 × 15'},{label:'Drop set',val:'1 × Failure'}],
    color: '#10b981', emoji: '🦿', grad: 'linear-gradient(135deg,#14532d,#0f172a)',
    img: IMG_BASE + 'Leg_Press/0.jpg',
  },
  // SHOULDERS
  {
    id: 10, name: 'Overhead Press', group: 'shoulders', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'ไหล่หน้า, ไหล่กลาง (Anterior + Medial Deltoid)',
    desc: 'ท่าหลักสำหรับไหล่ที่กว้างและแข็งแรง เป็น indicator ของความแข็งแรงส่วนบนที่ดีที่สุด',
    sets: [{label:'Warm-up',val:'2 × 12'},{label:'Working',val:'4 × 8'},{label:'Push Press',val:'2 × 5'}],
    color: '#f59e0b', emoji: '🏹', grad: 'linear-gradient(135deg,#78350f,#0f172a)',
    img: IMG_BASE + 'Barbell_Shoulder_Press/0.jpg',
  },
  {
    id: 11, name: 'Lateral Raise', group: 'shoulders', level: 'ง่าย', equip: 'ดัมเบล',
    muscle: 'ไหล่กลาง (Medial Deltoid)',
    desc: 'ท่าที่ขาดไม่ได้สำหรับสร้างไหล่กว้าง ต้องทำ volume สูงเพื่อผลลัพธ์ที่ดีที่สุด',
    sets: [{label:'Set 1-5',val:'5 × 20-25'},{label:'Cable',val:'3 × 20 (each side)'}],
    color: '#f59e0b', emoji: '✈️', grad: 'linear-gradient(135deg,#451a03,#0f172a)',
    img: IMG_BASE + 'Side_Laterals_to_Front_Raise/0.jpg',
  },
  {
    id: 12, name: 'Face Pull', group: 'shoulders', level: 'ง่าย', equip: 'เคเบิล',
    muscle: 'ไหล่หลัง, Rotator Cuff (Rear Deltoid)',
    desc: 'ท่าที่หลายคนมองข้าม แต่สำคัญมากสำหรับสุขภาพไหล่ ป้องกันบาดเจ็บ และ posture ที่ดี',
    sets: [{label:'Set 1-4',val:'4 × 15-20'},{label:'External rotation',val:'2 × 15'}],
    color: '#f59e0b', emoji: '🎯', grad: 'linear-gradient(135deg,#431407,#0f172a)',
    img: IMG_BASE + 'Face_Pull/0.jpg',
  },
  // ARMS
  {
    id: 13, name: 'Barbell Curl', group: 'arms', level: 'ง่าย', equip: 'บาร์เบล',
    muscle: 'ไบเซ็ป (Biceps Brachii)',
    desc: 'ท่าคลาสสิกที่ดีที่สุดสำหรับพัฒนา bicep peak ใช้น้ำหนักที่เหมาะสมเพื่อ squeeze ที่ด้านบน',
    sets: [{label:'Set 1-4',val:'4 × 10-12'},{label:'21s',val:'3 sets'}],
    color: '#ef4444', emoji: '💪', grad: 'linear-gradient(135deg,#450a0a,#0f172a)',
    img: IMG_BASE + 'Wide-Grip_Standing_Barbell_Curl/0.jpg',
  },
  {
    id: 14, name: 'Skull Crusher', group: 'arms', level: 'ปานกลาง', equip: 'EZ Bar',
    muscle: 'ไตรเซ็ป (Triceps)',
    desc: 'ท่าที่มีประสิทธิภาพสูงสุดสำหรับ long head ของ tricep ช่วยสร้างแขนหลังที่นูนและแข็งแรง',
    sets: [{label:'Set 1-4',val:'4 × 10-12'},{label:'Superset',val:'+ Close grip press 4×8'}],
    color: '#ef4444', emoji: '💀', grad: 'linear-gradient(135deg,#3b0000,#0f172a)',
    img: IMG_BASE + 'EZ-Bar_Skullcrusher/0.jpg',
  },
  {
    id: 15, name: 'Hammer Curl', group: 'arms', level: 'ง่าย', equip: 'ดัมเบล',
    muscle: 'Brachialis, Brachioradialis',
    desc: 'ช่วยเพิ่มความหนาของแขน พัฒนา Brachialis ที่ดันให้ bicep ดูสูงขึ้น',
    sets: [{label:'Set 1-3',val:'3 × 12-15 (each)'},{label:'Alternating',val:'3 × 10'}],
    color: '#ef4444', emoji: '🔨', grad: 'linear-gradient(135deg,#3c0000,#0f172a)',
    img: IMG_BASE + 'Alternate_Hammer_Curl/0.jpg',
  },
  // CORE
  {
    id: 16, name: 'Plank', group: 'core', level: 'ง่าย', equip: 'ไม่ต้องมีอุปกรณ์',
    muscle: 'แกนกลางลำตัว (Transverse Abdominis, Obliques)',
    desc: 'ท่าพื้นฐานที่สร้างความมั่นคงของแกนกลางลำตัว ช่วยทุกท่าออกกำลังกายอื่น',
    sets: [{label:'Time',val:'3 × 60 วินาที'},{label:'Side plank',val:'3 × 45s (each)'},{label:'RKC plank',val:'3 × 30s'}],
    color: '#8b5cf6', emoji: '🧘', grad: 'linear-gradient(135deg,#2e1065,#0f172a)',
    img: IMG_BASE + 'Plank/0.jpg',
  },
  {
    id: 17, name: 'Cable Crunch', group: 'core', level: 'ง่าย', equip: 'เคเบิล',
    muscle: 'หน้าท้อง (Rectus Abdominis)',
    desc: 'ท่าเดียวที่ใส่ resistance ได้ตรงๆ บน abs ช่วยพัฒนา six-pack ได้อย่างมีประสิทธิภาพ',
    sets: [{label:'Set 1-4',val:'4 × 15-20'}],
    color: '#8b5cf6', emoji: '⚡', grad: 'linear-gradient(135deg,#1e1b4b,#0f172a)',
    img: IMG_BASE + 'Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists/0.jpg',
  },
  {
    id: 18, name: 'Hanging Leg Raise', group: 'core', level: 'ปานกลาง', equip: 'บาร์โหน',
    muscle: 'หน้าท้องล่าง, Hip Flexors',
    desc: 'ท่าที่ยากแต่ผลดีมาก ช่วยพัฒนา lower abs ที่คนส่วนใหญ่ขาดในโปรแกรม',
    sets: [{label:'Set 1-4',val:'4 × 10-15'},{label:'Toes to bar',val:'3 × Max'}],
    color: '#8b5cf6', emoji: '🦵', grad: 'linear-gradient(135deg,#312e81,#0f172a)',
    img: IMG_BASE + 'Hanging_Leg_Raise/0.jpg',
  },
  // CARDIO
  {
    id: 19, name: 'HIIT Sprint', group: 'cardio', level: 'ยาก', equip: 'ลู่วิ่ง',
    muscle: 'ระบบหัวใจและหลอดเลือด',
    desc: 'วิ่ง interval 20s สปรินต์ 40s พัก ซ้ำ 8-10 รอบ เผาผลาญสูง และ afterburn effect นานถึง 24 ชั่วโมง',
    sets: [{label:'Warm-up',val:'5 นาที เดินเร็ว'},{label:'Sprint',val:'8-10 × 20s sprint / 40s rest'},{label:'Cool down',val:'5 นาที เดิน'}],
    color: '#f43f5e', emoji: '🏃', grad: 'linear-gradient(135deg,#4c0519,#0f172a)',
    img: IMG_BASE + 'Wind_Sprints/0.jpg',
  },
  {
    id: 20, name: 'Jump Rope', group: 'cardio', level: 'ปานกลาง', equip: 'เชือกกระโดด',
    muscle: 'ระบบหัวใจ, ขา, คอร์',
    desc: 'Cardio ที่คุ้มค่าที่สุด ทำได้ทุกที่ ช่วยพัฒนาความคล่องตัว จังหวะ และ endurance',
    sets: [{label:'Round 1-5',val:'5 × 3 นาที'},{label:'Double under',val:'3 × 50 reps'}],
    color: '#f43f5e', emoji: '🪢', grad: 'linear-gradient(135deg,#881337,#0f172a)',
    img: IMG_BASE + 'Rope_Jumping/0.jpg',
  },
];

const SESSION_EXERCISES = [
  { name: 'Bench Press', sets: 4, reps: 8, weight: '—', done: false },
  { name: 'Overhead Press', sets: 3, reps: 10, weight: '—', done: false },
  { name: 'Incline Dumbbell Press', sets: 3, reps: 12, weight: '—', done: false },
  { name: 'Lateral Raise', sets: 4, reps: 15, weight: '—', done: false },
  { name: 'Tricep Pushdown', sets: 3, reps: 12, weight: '—', done: false },
];

// ===== STATE =====
let currentPage = 'dashboard';
let timerInterval = null;
let timerRunning = false;
let timerSeconds = 0;
let restInterval = null;
let restSeconds = 90;
let currentFilter = 'all';
let currentExercise = null;
let sessionExercises = SESSION_EXERCISES.map(e => ({ ...e }));

// ===== ASSESSMENT STORAGE =====
const STORAGE_KEY = 'fitpro_assessment_v1';

function loadAssessment() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }
  catch { return null; }
}

function saveAssessment(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function hasAssessment() {
  const d = loadAssessment();
  return d && d.completed === true;
}

// RPE → weight adjustment factor
function rpeAdjustment(rpe) {
  if (rpe <= 4) return 1.15;
  if (rpe <= 6) return 1.10;
  if (rpe === 7) return 1.05;
  if (rpe === 8) return 1.025;
  if (rpe === 9) return 1.00;
  return 0.925; // RPE 10 — near max, back off slightly
}

// Round to nearest 2.5 kg plate-friendly increment
function roundWeight(kg) {
  return Math.round(kg / 2.5) * 2.5;
}

function rpeLabel(rpe) {
  if (rpe <= 4) return { text: 'เบามาก', color: '#22c55e' };
  if (rpe <= 6) return { text: 'พอดี', color: '#84cc16' };
  if (rpe <= 8) return { text: 'หนัก', color: '#f59e0b' };
  return { text: 'สุดแรง', color: '#ef4444' };
}

function calcRecommendations(assessData) {
  const recs = {};
  for (const [name, entry] of Object.entries(assessData.exercises)) {
    const factor = rpeAdjustment(entry.rpe);
    const newWeight = roundWeight(entry.weight * factor);
    const delta = newWeight - entry.weight;
    recs[name] = {
      weight: newWeight,
      prevWeight: entry.weight,
      prevRpe: entry.rpe,
      delta,
      reasoning: `RPE ${entry.rpe} → ${delta > 0 ? '+' : ''}${delta} kg`,
    };
  }
  return recs;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      renderExercises();
      renderCalendar();
      initWorkoutPage();
    }, 600);
  }, 2200);
});

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  currentPage = page;
  const titles = {
    dashboard: 'แดชบอร์ด', exercises: 'ท่าออกกำลังกาย',
    plans: 'โปรแกรมเทรน', workout: 'เริ่มเทรน', progress: 'ความก้าวหน้า'
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;
  closeSidebar();
  if (page === 'workout') initWorkoutPage();
}

function initWorkoutPage() {
  const assessMode = document.getElementById('assessmentMode');
  const sessMode = document.getElementById('sessionMode');
  if (hasAssessment()) {
    assessMode.style.display = 'none';
    sessMode.style.display = 'block';
    const recs = calcRecommendations(loadAssessment());
    renderSessionExercisesWithRecs(recs);
    document.getElementById('recBanner').style.display = 'flex';
  } else {
    assessMode.style.display = 'block';
    sessMode.style.display = 'none';
    renderAssessmentForms();
  }
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  sb.classList.toggle('open');
  let bd = document.getElementById('sidebarBackdrop');
  if (!bd) {
    bd = document.createElement('div');
    bd.className = 'sidebar-backdrop';
    bd.id = 'sidebarBackdrop';
    bd.onclick = closeSidebar;
    document.body.appendChild(bd);
  }
  bd.classList.toggle('open', sb.classList.contains('open'));
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  const bd = document.getElementById('sidebarBackdrop');
  if (bd) bd.classList.remove('open');
}

// ===== ASSESSMENT FORMS =====
function renderAssessmentForms() {
  const container = document.getElementById('assessmentForms');
  container.innerHTML = SESSION_EXERCISES.map((ex, i) => `
    <div class="assess-card" id="acard-${i}">
      <div class="assess-card-header" onclick="toggleAssessCard(${i})">
        <div class="assess-num">${i + 1}</div>
        <h4>${ex.name}</h4>
        <span class="suggested">แนะนำ: ${ex.sets}×${ex.reps}</span>
        <svg class="assess-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="assess-card-body">
        <div class="input-grid">
          <div class="input-field">
            <label>น้ำหนัก (kg)</label>
            <input type="number" id="aw-${i}" min="0" max="500" step="2.5"
              placeholder="เช่น 60" oninput="this.classList.remove('invalid')"/>
          </div>
          <div class="input-field">
            <label>เซท</label>
            <input type="number" id="as-${i}" min="1" max="10" step="1"
              value="${ex.sets}" placeholder="${ex.sets}"/>
          </div>
          <div class="input-field">
            <label>ครั้ง (จริง)</label>
            <input type="number" id="ar-${i}" min="1" max="50" step="1"
              value="${ex.reps}" placeholder="${ex.reps}"/>
          </div>
        </div>
        <div class="rpe-wrap">
          <label>RPE — ความหนักที่รู้สึก (1 เบา → 10 สุดแรง)</label>
          <div class="rpe-slider-row">
            <input type="range" class="rpe-slider" id="arpe-${i}" min="1" max="10" step="1" value="7"
              oninput="updateRpeDisplay(${i}, this.value)"/>
            <div class="rpe-val-badge" id="rpebadge-${i}"
              style="background:rgba(245,158,11,0.2);color:#f59e0b">7</div>
          </div>
          <div class="rpe-labels"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span></div>
        </div>
      </div>
    </div>
  `).join('');

  // Auto-open first card
  toggleAssessCard(0);
}

function toggleAssessCard(i) {
  const card = document.getElementById(`acard-${i}`);
  card.classList.toggle('open');
}

function updateRpeDisplay(i, val) {
  const badge = document.getElementById(`rpebadge-${i}`);
  const rpe = parseInt(val);
  const { text, color } = rpeLabel(rpe);
  badge.textContent = rpe;
  badge.style.background = color + '22';
  badge.style.color = color;
  badge.title = text;
}

function submitAssessment() {
  // Validate all exercises have weight
  let valid = true;
  const exercises = {};

  SESSION_EXERCISES.forEach((ex, i) => {
    const wInput = document.getElementById(`aw-${i}`);
    const weight = parseFloat(wInput.value);
    if (!weight || weight <= 0) {
      wInput.classList.add('invalid');
      document.getElementById(`acard-${i}`).classList.add('open');
      valid = false;
      return;
    }
    const sets = parseInt(document.getElementById(`as-${i}`).value) || ex.sets;
    const reps = parseInt(document.getElementById(`ar-${i}`).value) || ex.reps;
    const rpe = parseInt(document.getElementById(`arpe-${i}`).value) || 7;
    exercises[ex.name] = { weight, sets, reps, rpe };
  });

  if (!valid) {
    showToast('⚠️ กรุณากรอกน้ำหนักให้ครบทุกท่าก่อนนะคะ');
    return;
  }

  const assessData = { completed: true, date: new Date().toISOString(), exercises };
  saveAssessment(assessData);

  // Show results
  showAssessmentResult(assessData);
}

function showAssessmentResult(assessData) {
  const recs = calcRecommendations(assessData);
  const container = document.getElementById('assessmentForms');

  const rows = Object.entries(recs).map(([name, r]) => {
    const deltaSign = r.delta > 0 ? 'up' : r.delta < 0 ? 'down' : 'same';
    const deltaText = r.delta > 0 ? `▲ +${r.delta} kg` : r.delta < 0 ? `▼ ${r.delta} kg` : '= เท่าเดิม';
    const { text: rpeText, color } = rpeLabel(r.prevRpe);
    return `
      <div class="rec-row">
        <div>
          <div class="rec-name">${name}</div>
          <div class="rec-detail" style="color:${color}">RPE ${r.prevRpe} — ${rpeText} • ${r.reasoning}</div>
        </div>
        <div style="text-align:right">
          <div class="rec-weight">${r.weight} kg</div>
          <div class="rec-change ${deltaSign}">${deltaText}</div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="assess-result">
      <h3>✅ น้ำหนักแนะนำสำหรับครั้งถัดไป</h3>
      ${rows}
    </div>
  `;

  const btn = document.getElementById('assessSubmitBtn');
  btn.textContent = '🏋️ เริ่มเทรนเซสชันปัจจุบันเลย!';
  btn.onclick = () => {
    document.getElementById('assessmentMode').style.display = 'none';
    document.getElementById('sessionMode').style.display = 'block';
    renderSessionExercisesWithRecs(recs);
    document.getElementById('recBanner').style.display = 'flex';
  };
}

function resetAssessment() {
  if (!confirm('ล้างผลประเมินทั้งหมดและเริ่มใหม่?')) return;
  localStorage.removeItem(STORAGE_KEY);
  initWorkoutPage();
  showToast('🔄 รีเซ็ตการประเมินแล้วค่ะ');
}

// ===== EXERCISES RENDER =====
function renderExercises(filter = 'all', query = '') {
  const grid = document.getElementById('exercisesGrid');
  const filtered = EXERCISES.filter(e => {
    const matchGroup = filter === 'all' || e.group === filter;
    const matchQuery = e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.muscle.toLowerCase().includes(query.toLowerCase());
    return matchGroup && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text3)">ไม่พบท่าออกกำลังกาย 😅</div>`;
    return;
  }

  grid.innerHTML = filtered.map(ex => `
    <div class="ex-card" onclick="openExModal(${ex.id})">
      <div class="ex-card-art" style="background:${ex.grad}">
        <img class="ex-card-img" src="${ex.img}" alt="${ex.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          loading="lazy"/>
        <div class="ex-card-img-fallback" style="display:none">${makeExerciseSVG(ex)}</div>
      </div>
      <div class="ex-card-body">
        <div class="ex-card-name">${ex.name}</div>
        <div class="ex-card-meta">
          <span class="ex-tag">${groupLabel(ex.group)}</span>
          <span class="ex-tag ${levelColor(ex.level)}">${ex.level}</span>
          <span class="ex-tag cyan">${ex.equip}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function makeExerciseSVG(ex) {
  // ── DEMO: exercise 1 uses new high-quality style ──────────
  if (ex.id === 1) {
    return `<svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bdy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#daedf9"/>
          <stop offset="100%" stop-color="#6ea4c8"/>
        </linearGradient>
        <radialGradient id="pec" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#15803d"/>
        </radialGradient>
        <filter id="gl"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="ds"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,20,50,0.45)"/></filter>
      </defs>

      <!-- bench legs -->
      <rect x="15" y="74" width="6" height="20" rx="3" fill="#2c4a68"/>
      <rect x="89" y="74" width="6" height="20" rx="3" fill="#2c4a68"/>
      <!-- bench pad -->
      <rect x="5" y="63" width="100" height="13" rx="6" fill="#1e3a58" stroke="#3a6080" stroke-width="1.5"/>

      <!-- legs (right end) — drawn behind torso -->
      <path d="M75,57 Q86,59 92,63" stroke="#5a8aaa" stroke-width="13" stroke-linecap="round"/>
      <path d="M75,57 Q86,59 92,63" stroke="#cde8f6" stroke-width="9" stroke-linecap="round"/>
      <path d="M92,63 Q98,70 97,80" stroke="#5a8aaa" stroke-width="12" stroke-linecap="round"/>
      <path d="M92,63 Q98,70 97,80" stroke="#cde8f6" stroke-width="8" stroke-linecap="round"/>

      <!-- torso (filled rect with rounded ends) -->
      <rect x="25" y="47" width="54" height="20" rx="10" fill="url(#bdy)" stroke="#82b0cc" stroke-width="1.5" filter="url(#ds)"/>

      <!-- pec muscle highlights -->
      <ellipse cx="43" cy="57" rx="13" ry="9" fill="url(#pec)" filter="url(#gl)" opacity="0.95"/>
      <ellipse cx="63" cy="57" rx="13" ry="9" fill="url(#pec)" filter="url(#gl)" opacity="0.95"/>

      <!-- left arm (upper + forearm) pushing bar -->
      <path d="M43,47 Q41,37 39,25" stroke="#5a8aaa" stroke-width="13" stroke-linecap="round"/>
      <path d="M43,47 Q41,37 39,25" stroke="#cde8f6" stroke-width="9" stroke-linecap="round"/>
      <!-- right arm -->
      <path d="M63,47 Q65,37 67,25" stroke="#5a8aaa" stroke-width="13" stroke-linecap="round"/>
      <path d="M63,47 Q65,37 67,25" stroke="#cde8f6" stroke-width="9" stroke-linecap="round"/>

      <!-- barbell plates left -->
      <rect x="10" y="16" width="7" height="18" rx="3" fill="#2c4a68" stroke="#4a6a88" stroke-width="1.5"/>
      <!-- barbell bar -->
      <rect x="14" y="22" width="82" height="5" rx="2.5" fill="#3a5a78" stroke="#5a7a98" stroke-width="1"/>
      <!-- barbell plates right -->
      <rect x="93" y="16" width="7" height="18" rx="3" fill="#2c4a68" stroke="#4a6a88" stroke-width="1.5"/>

      <!-- head -->
      <circle cx="16" cy="55" r="11" fill="url(#bdy)" stroke="#82b0cc" stroke-width="1.5" filter="url(#ds)"/>

      <!-- motion arrow (push up) -->
      <line x1="55" y1="42" x2="55" y2="30" stroke="#22c55e" stroke-width="3" stroke-dasharray="3,2.5" opacity="0.9"/>
      <polygon points="50,29 60,29 55,22" fill="#22c55e" opacity="0.9"/>
    </svg>`;
  }

  // 3D-style figure: light body + green muscle highlight + motion arrow
  const B = '#c8daea';                    // body/limb stroke
  const F = 'rgba(180,210,230,0.22)';    // body fill
  const M = '#22c55e';                    // muscle green
  const MG = 'rgba(34,197,94,0.28)';     // muscle glow
  const E = '#7a8fa8';                    // equipment
  const A = '#16a34a';                    // arrow

  // shared defs (gradient + filter for 3D feel)
  const DEFS = `<defs>
    <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="limb" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="rgba(100,140,170,0.6)"/><stop offset="50%" stop-color="rgba(200,218,234,0.9)"/><stop offset="100%" stop-color="rgba(100,140,170,0.6)"/></linearGradient>
  </defs>`;

  // helper: arrow pointing up
  const arrowUp = (x,y) => `<line x1="${x}" y1="${y+14}" x2="${x}" y2="${y+2}" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/><polygon points="${x-4},${y+2} ${x+4},${y+2} ${x},${y-4}" fill="${A}" opacity="0.9"/>`;

  const svgs = {

    // ── BENCH PRESS ──────────────────────────────────────────
    1: `${DEFS}
      <rect x="8" y="65" width="94" height="10" rx="5" fill="rgba(100,130,160,0.3)" stroke="${E}" stroke-width="1.5"/>
      <rect x="18" y="75" width="5" height="18" rx="2" fill="${E}" opacity="0.45"/>
      <rect x="87" y="75" width="5" height="18" rx="2" fill="${E}" opacity="0.45"/>
      <circle cx="15" cy="53" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M22,58 L82,58 Q88,58 88,53 Q88,48 82,48 L22,48 Q17,48 17,53 Q17,58 22,58Z" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <ellipse cx="42" cy="53" rx="12" ry="7" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="42" cy="53" rx="10" ry="5.5" fill="${M}" opacity="0.9"/>
      <ellipse cx="63" cy="53" rx="12" ry="7" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="63" cy="53" rx="10" ry="5.5" fill="${M}" opacity="0.9"/>
      <path d="M42,48 L40,24" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,48 L65,24" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="16" y1="22" x2="94" y2="22" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="12" y="15" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/>
      <rect x="92" y="15" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/>
      <path d="M83,53 Q92,58 95,65" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M95,65 Q99,74 98,86" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      ${arrowUp(53,22)}`,

    // ── INCLINE DUMBBELL PRESS ────────────────────────────────
    2: `${DEFS}
      <path d="M6,102 L88,24" stroke="${E}" stroke-width="7" stroke-linecap="round" opacity="0.38"/>
      <circle cx="20" cy="18" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M26,25 Q53,53 77,70" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M26,25 Q53,46 74,62" stroke="${MG}" stroke-width="12" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M26,25 Q53,46 74,62" stroke="${M}" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
      <path d="M31,22 L19,10" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M45,33 L35,20" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="12" y1="9" x2="26" y2="9" stroke="${E}" stroke-width="3"/>
      <circle cx="10" cy="9" r="4.5" fill="${E}" opacity="0.7"/><circle cx="28" cy="9" r="4.5" fill="${E}" opacity="0.7"/>
      <line x1="28" y1="19" x2="42" y2="19" stroke="${E}" stroke-width="3"/>
      <circle cx="26" cy="19" r="4.5" fill="${E}" opacity="0.7"/><circle cx="44" cy="19" r="4.5" fill="${E}" opacity="0.7"/>
      <path d="M77,70 Q87,78 93,90" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M93,90 Q97,100 96,110" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <polygon points="15,7 21,15 9,15" fill="${A}" opacity="0.9"/>
      <polygon points="31,17 37,25 25,25" fill="${A}" opacity="0.9"/>`,

    // ── CABLE FLYES ───────────────────────────────────────────
    3: `${DEFS}
      <circle cx="55" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <rect x="47" y="19" width="16" height="32" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <ellipse cx="42" cy="32" rx="13" ry="8" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="42" cy="32" rx="11" ry="6.5" fill="${M}" opacity="0.9"/>
      <ellipse cx="68" cy="32" rx="13" ry="8" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="68" cy="32" rx="11" ry="6.5" fill="${M}" opacity="0.9"/>
      <path d="M47,24 Q28,28 12,24" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,24 Q82,28 98,24" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <circle cx="11" cy="24" r="5.5" fill="${E}" opacity="0.8"/><circle cx="99" cy="24" r="5.5" fill="${E}" opacity="0.8"/>
      <path d="M49,51 Q43,66 41,84" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,51 Q67,66 69,84" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M41,84 Q39,96 38,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M69,84 Q71,96 72,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M20,24 L44,34" stroke="${A}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.85"/>
      <path d="M90,24 L66,34" stroke="${A}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.85"/>
      <polygon points="41,30 48,36 38,38" fill="${A}" opacity="0.85"/>
      <polygon points="69,30 62,36 72,38" fill="${A}" opacity="0.85"/>`,

    // ── PULL-UP ───────────────────────────────────────────────
    4: `${DEFS}
      <line x1="4" y1="6" x2="106" y2="6" stroke="${E}" stroke-width="5.5" stroke-linecap="round"/>
      <rect x="2" y="2" width="10" height="16" rx="3" fill="${E}" opacity="0.5"/><rect x="98" y="2" width="10" height="16" rx="3" fill="${E}" opacity="0.5"/>
      <path d="M42,8 L46,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M68,8 L64,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <circle cx="55" cy="35" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M46,42 Q36,50 36,60" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M64,42 Q74,50 74,60" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M46,42 Q36,50 36,60" stroke="${MG}" stroke-width="11" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M64,42 Q74,50 74,60" stroke="${MG}" stroke-width="11" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M46,42 Q36,50 36,60" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      <path d="M64,42 Q74,50 74,60" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      <path d="M36,60 Q40,72 43,82" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M74,60 Q70,72 67,82" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M43,82 Q46,94 48,106" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M67,82 Q64,94 62,106" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      ${arrowUp(55,18)}`,

    // ── BARBELL ROW ───────────────────────────────────────────
    5: `${DEFS}
      <circle cx="78" cy="14" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M72,20 Q58,34 44,50" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M72,20 Q58,34 44,50" stroke="${MG}" stroke-width="12" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M72,20 Q58,34 44,50" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      <path d="M66,18 Q56,36 50,54" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M84,18 Q76,36 72,54" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="14" y1="60" x2="90" y2="60" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="10" y="53" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/><rect x="88" y="53" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/>
      <path d="M44,50 Q36,66 32,82" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M52,54 Q52,70 54,84" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M32,82 Q29,94 30,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M54,84 Q56,96 56,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M66,52 L66,40" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <polygon points="62,39 70,39 66,33" fill="${A}" opacity="0.9"/>`,

    // ── LAT PULLDOWN ──────────────────────────────────────────
    6: `${DEFS}
      <line x1="4" y1="5" x2="106" y2="5" stroke="${E}" stroke-width="4" stroke-linecap="round"/>
      <line x1="55" y1="5" x2="55" y2="18" stroke="${E}" stroke-width="2.5"/>
      <line x1="36" y1="18" x2="74" y2="18" stroke="${E}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="55" cy="36" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M46,43 Q36,35 36,18" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M64,43 Q74,35 74,18" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M46,45 Q36,54 36,64" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M64,45 Q74,54 74,64" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M46,45 Q36,54 36,64" stroke="${MG}" stroke-width="11" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M64,45 Q74,54 74,64" stroke="${MG}" stroke-width="11" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M46,45 Q36,54 36,64" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      <path d="M64,45 Q74,54 74,64" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      <rect x="43" y="64" width="24" height="8" rx="4" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M45,72 Q38,84 36,96" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M65,72 Q72,84 74,96" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M36,96 Q34,104 35,110" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M74,96 Q76,104 75,110" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="55" y1="28" x2="55" y2="42" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <polygon points="51,43 59,43 55,49" fill="${A}" opacity="0.9"/>`,

    // ── BARBELL SQUAT ─────────────────────────────────────────
    7: `${DEFS}
      <line x1="18" y1="36" x2="92" y2="36" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="14" y="28" width="6" height="16" rx="2" fill="${E}" opacity="0.75"/><rect x="90" y="28" width="6" height="16" rx="2" fill="${E}" opacity="0.75"/>
      <circle cx="55" cy="24" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M46,36 L38,52" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M64,36 L72,52" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <rect x="46" y="36" width="18" height="24" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M48,60 Q40,74 34,88" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M62,60 Q70,74 76,88" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M48,60 Q40,74 34,88" stroke="${MG}" stroke-width="10" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M62,60 Q70,74 76,88" stroke="${MG}" stroke-width="10" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M48,60 Q40,74 34,88" stroke="${M}" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <path d="M62,60 Q70,74 76,88" stroke="${M}" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <ellipse cx="55" cy="55" rx="10" ry="6" fill="${M}" opacity="0.6"/>
      <path d="M34,88 Q30,98 32,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M76,88 Q80,98 78,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      ${arrowUp(55,20)}`,

    // ── ROMANIAN DEADLIFT ─────────────────────────────────────
    8: `${DEFS}
      <circle cx="76" cy="12" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M70,18 Q56,32 44,50" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M70,18 Q56,32 44,50" stroke="${MG}" stroke-width="12" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M70,18 Q56,32 44,50" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.9"/>
      <path d="M64,16 Q58,34 54,52" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M82,14 Q80,32 78,52" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="14" y1="56" x2="90" y2="56" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="10" y="49" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/><rect x="88" y="49" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/>
      <path d="M44,50 Q38,66 36,84" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M52,52 Q52,70 52,86" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M44,50 Q38,66 36,84" stroke="${MG}" stroke-width="9" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M44,50 Q38,66 36,84" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.75"/>
      <path d="M36,84 Q34,96 36,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M52,86 Q52,96 52,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M62,48 L62,34" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <polygon points="58,33 66,33 62,27" fill="${A}" opacity="0.9"/>`,

    // ── LEG PRESS ─────────────────────────────────────────────
    9: `${DEFS}
      <rect x="52" y="4" width="54" height="52" rx="8" fill="rgba(100,130,160,0.15)" stroke="${E}" stroke-width="1.5"/>
      <rect x="52" y="4" width="54" height="16" rx="5" fill="${E}" opacity="0.3"/>
      <circle cx="22" cy="82" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M14,76 Q10,62 16,48" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M30,76 Q34,62 40,48" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M16,48 Q34,38 56,30" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M40,48 Q54,40 66,34" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M16,48 Q34,38 56,30" stroke="${MG}" stroke-width="10" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M40,48 Q54,40 66,34" stroke="${MG}" stroke-width="10" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M16,48 Q34,38 56,30" stroke="${M}" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <path d="M40,48 Q54,40 66,34" stroke="${M}" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <path d="M22,72 Q16,62 14,50" stroke="${B}" stroke-width="6" stroke-linecap="round"/>
      <path d="M22,72 L22,88 L14,96" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M66,30 L66,20" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <polygon points="62,19 70,19 66,13" fill="${A}" opacity="0.9"/>`,

    // ── OVERHEAD PRESS ────────────────────────────────────────
    10: `${DEFS}
      <line x1="20" y1="28" x2="90" y2="28" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="16" y="20" width="6" height="16" rx="2" fill="${E}" opacity="0.75"/><rect x="88" y="20" width="6" height="16" rx="2" fill="${E}" opacity="0.75"/>
      <circle cx="55" cy="40" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M46,46 L28,28" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M64,46 L82,28" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="28" cy="48" rx="10" ry="7" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="28" cy="48" rx="8.5" ry="6" fill="${M}" opacity="0.9"/>
      <ellipse cx="82" cy="48" rx="10" ry="7" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="82" cy="48" rx="8.5" ry="6" fill="${M}" opacity="0.9"/>
      <path d="M46,49 Q36,52 28,50" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M64,49 Q74,52 82,50" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <rect x="47" y="49" width="16" height="24" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M49,73 Q43,86 41,100" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,73 Q67,86 69,100" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M41,100 Q39,106 40,110" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M69,100 Q71,106 70,110" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      ${arrowUp(55,22)}`,

    // ── LATERAL RAISE ─────────────────────────────────────────
    11: `${DEFS}
      <circle cx="55" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <rect x="47" y="19" width="16" height="32" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <ellipse cx="28" cy="30" rx="11" ry="7.5" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="28" cy="30" rx="9.5" ry="6.5" fill="${M}" opacity="0.9"/>
      <ellipse cx="82" cy="30" rx="11" ry="7.5" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="82" cy="30" rx="9.5" ry="6.5" fill="${M}" opacity="0.9"/>
      <path d="M47,22 Q36,26 28,30" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,22 Q74,26 82,30" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M47,22 Q36,24 26,26" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
      <path d="M63,22 Q74,24 84,26" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
      <path d="M28,30 Q18,34 11,32" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M82,30 Q92,34 99,32" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <circle cx="9" cy="32" r="5.5" fill="${E}" opacity="0.8"/><circle cx="101" cy="32" r="5.5" fill="${E}" opacity="0.8"/>
      <path d="M49,51 Q43,66 41,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,51 Q67,66 69,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M41,82 Q39,94 40,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M69,82 Q71,94 70,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="16" y1="28" x2="24" y2="18" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.85"/>
      <line x1="94" y1="28" x2="86" y2="18" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.85"/>
      <polygon points="22,14 28,20 20,22" fill="${A}" opacity="0.85"/>
      <polygon points="88,14 82,20 90,22" fill="${A}" opacity="0.85"/>`,

    // ── FACE PULL ─────────────────────────────────────────────
    12: `${DEFS}
      <circle cx="55" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M47,20 Q38,28 38,38" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,20 Q72,28 72,38" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="38" cy="34" rx="10" ry="7" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="38" cy="34" rx="8.5" ry="6" fill="${M}" opacity="0.9"/>
      <ellipse cx="72" cy="34" rx="10" ry="7" fill="${MG}" filter="url(#glow)"/>
      <ellipse cx="72" cy="34" rx="8.5" ry="6" fill="${M}" opacity="0.9"/>
      <path d="M38,38 Q26,40 14,36" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M72,38 Q84,40 96,36" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <line x1="6" y1="20" x2="14" y2="36" stroke="${E}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.55"/>
      <line x1="104" y1="20" x2="96" y2="36" stroke="${E}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.55"/>
      <rect x="47" y="19" width="16" height="34" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M49,53 Q43,66 41,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,53 Q67,66 69,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M41,82 Q39,94 40,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M69,82 Q71,94 70,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M26,36 L40,32" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.85"/>
      <path d="M84,36 L70,32" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.85"/>`,

    // ── BARBELL CURL ──────────────────────────────────────────
    13: `${DEFS}
      <circle cx="55" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M47,20 Q40,30 38,42" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,20 Q70,30 72,42" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M47,20 Q40,30 38,42" stroke="${MG}" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M63,20 Q70,30 72,42" stroke="${MG}" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M47,20 Q40,30 38,42" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
      <path d="M63,20 Q70,30 72,42" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
      <path d="M38,42 Q34,54 34,64" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M72,42 Q76,54 76,64" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <line x1="28" y1="64" x2="82" y2="64" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="24" y="57" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/><rect x="80" y="57" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/>
      <rect x="47" y="19" width="16" height="34" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M49,53 Q44,68 42,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,53 Q66,68 68,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M42,82 Q40,94 40,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M68,82 Q70,94 70,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M38,50 L38,36" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <path d="M72,50 L72,36" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <polygon points="34,35 42,35 38,29" fill="${A}" opacity="0.9"/>
      <polygon points="68,35 76,35 72,29" fill="${A}" opacity="0.9"/>`,

    // ── SKULL CRUSHER ─────────────────────────────────────────
    14: `${DEFS}
      <rect x="8" y="65" width="94" height="10" rx="5" fill="rgba(100,130,160,0.3)" stroke="${E}" stroke-width="1.5"/>
      <rect x="18" y="75" width="5" height="18" rx="2" fill="${E}" opacity="0.45"/><rect x="87" y="75" width="5" height="18" rx="2" fill="${E}" opacity="0.45"/>
      <circle cx="15" cy="53" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M22,58 L82,58 Q88,58 88,53 Q88,48 82,48 L22,48 Q17,48 17,53 Q17,58 22,58Z" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M43,48 L45,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,48 L61,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M45,26 Q53,20 61,26" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M43,48 L45,26" stroke="${MG}" stroke-width="6" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M63,48 L61,26" stroke="${MG}" stroke-width="6" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M45,26 Q53,20 61,26" stroke="${MG}" stroke-width="6" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M43,48 L45,26" stroke="${M}" stroke-width="4.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M63,48 L61,26" stroke="${M}" stroke-width="4.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M45,26 Q53,20 61,26" stroke="${M}" stroke-width="4.5" stroke-linecap="round" opacity="0.9"/>
      <line x1="28" y1="22" x2="72" y2="22" stroke="${E}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="24" y="15" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/><rect x="70" y="15" width="6" height="14" rx="2" fill="${E}" opacity="0.75"/>
      <path d="M83,53 Q92,58 95,65" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M95,65 Q99,74 98,86" stroke="${B}" stroke-width="8" stroke-linecap="round"/>`,

    // ── HAMMER CURL ───────────────────────────────────────────
    15: `${DEFS}
      <circle cx="55" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <rect x="47" y="19" width="16" height="32" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M47,22 Q40,32 38,44" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,22 Q68,34 68,48" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M47,22 Q40,32 38,44" stroke="${MG}" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M47,22 Q40,32 38,44" stroke="${M}" stroke-width="4.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M38,44 Q34,56 34,66" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M68,48 Q72,58 72,68" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <line x1="31" y1="60" x2="31" y2="76" stroke="${E}" stroke-width="3"/>
      <circle cx="31" cy="57" r="5" fill="${E}" opacity="0.75"/><circle cx="31" cy="79" r="5" fill="${E}" opacity="0.75"/>
      <line x1="75" y1="62" x2="75" y2="74" stroke="${E}" stroke-width="3"/>
      <circle cx="75" cy="59" r="5" fill="${E}" opacity="0.75"/><circle cx="75" cy="77" r="5" fill="${E}" opacity="0.75"/>
      <path d="M49,51 Q44,66 42,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,51 Q66,66 68,82" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M42,82 Q40,94 40,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M68,82 Q70,94 70,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M38,52 L38,38" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.9"/>
      <polygon points="34,37 42,37 38,31" fill="${A}" opacity="0.9"/>`,

    // ── PLANK ─────────────────────────────────────────────────
    16: `${DEFS}
      <line x1="5" y1="102" x2="105" y2="102" stroke="rgba(148,163,184,0.35)" stroke-width="3"/>
      <circle cx="14" cy="72" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M22,76 L95,76 Q101,76 101,71 Q101,66 95,66 L22,66 Q17,66 17,71 Q17,76 22,76Z" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <ellipse cx="58" cy="71" rx="28" ry="7" fill="${MG}" filter="url(#glow)"/>
      <path d="M28,71 L86,71" stroke="${M}" stroke-width="7" stroke-linecap="round" opacity="0.85"/>
      <path d="M22,76 L10,90 L10,102" stroke="${B}" stroke-width="9" stroke-linecap="round"/>
      <path d="M36,76 L32,90 L28,102" stroke="${B}" stroke-width="9" stroke-linecap="round"/>
      <path d="M10,90 L32,90" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M90,76 Q98,90 102,102" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M82,76 Q88,90 90,102" stroke="${B}" stroke-width="9" stroke-linecap="round"/>`,

    // ── CABLE CRUNCH ──────────────────────────────────────────
    17: `${DEFS}
      <line x1="4" y1="5" x2="106" y2="5" stroke="${E}" stroke-width="4" stroke-linecap="round"/>
      <line x1="55" y1="5" x2="55" y2="22" stroke="${E}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.6"/>
      <circle cx="40" cy="66" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M40,56 Q44,44 52,32" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M40,56 L28,50 L24,38" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M40,56 L52,50 L54,38" stroke="${B}" stroke-width="7" stroke-linecap="round"/>
      <path d="M24,38 Q30,30 38,22" stroke="${B}" stroke-width="6" stroke-linecap="round"/>
      <path d="M54,38 Q56,30 55,22" stroke="${B}" stroke-width="6" stroke-linecap="round"/>
      <path d="M40,56 Q37,68 37,80" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M40,56 Q37,64 37,74" stroke="${MG}" stroke-width="10" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M40,56 Q37,64 37,74" stroke="${M}" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
      <path d="M37,80 Q34,92 36,104" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M49,80 Q52,92 52,104" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M36,104 L26,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M52,104 L62,108" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="53" y1="26" x2="53" y2="12" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.8"/>`,

    // ── HANGING LEG RAISE ─────────────────────────────────────
    18: `${DEFS}
      <line x1="4" y1="6" x2="106" y2="6" stroke="${E}" stroke-width="5.5" stroke-linecap="round"/>
      <rect x="2" y="2" width="10" height="16" rx="3" fill="${E}" opacity="0.5"/><rect x="98" y="2" width="10" height="16" rx="3" fill="${E}" opacity="0.5"/>
      <path d="M42,8 L46,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M68,8 L64,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <circle cx="55" cy="35" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M46,42 Q36,50 36,60" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M64,42 Q74,50 74,60" stroke="${B}" stroke-width="14" stroke-linecap="round"/>
      <path d="M36,60 Q42,72 46,82" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M74,60 Q68,72 64,82" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M46,82 Q52,96 54,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M64,82 Q58,96 56,108" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M46,82 Q52,96 54,108" stroke="${MG}" stroke-width="8" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M64,82 Q58,96 56,108" stroke="${MG}" stroke-width="8" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M46,82 Q52,96 54,108" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
      <path d="M64,82 Q58,96 56,108" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
      <ellipse cx="55" cy="92" rx="14" ry="8" fill="${M}" opacity="0.35"/>
      ${arrowUp(55,74)}`,

    // ── HIIT SPRINT ───────────────────────────────────────────
    19: `${DEFS}
      <line x1="4" y1="106" x2="106" y2="106" stroke="rgba(148,163,184,0.3)" stroke-width="3"/>
      <circle cx="52" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <path d="M44,18 Q32,28 22,26" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M60,18 Q72,36 78,46" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <rect x="43" y="18" width="16" height="24" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M45,42 Q38,58 28,70" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M57,42 Q64,56 74,66" stroke="${B}" stroke-width="12" stroke-linecap="round"/>
      <path d="M45,42 Q38,58 28,70" stroke="${MG}" stroke-width="9" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M57,42 Q64,56 74,66" stroke="${MG}" stroke-width="9" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M45,42 Q38,58 28,70" stroke="${M}" stroke-width="5.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M57,42 Q64,56 74,66" stroke="${M}" stroke-width="5.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M28,70 Q22,84 20,98" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M74,66 Q80,80 82,94" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M74,66 Q80,80 82,94" stroke="${MG}" stroke-width="8" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M74,66 Q80,80 82,94" stroke="${M}" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
      <path d="M62,38 L74,22" stroke="${A}" stroke-width="2.5" stroke-dasharray="3,2" opacity="0.8"/>
      <polygon points="72,18 78,26 66,26" fill="${A}" opacity="0.8"/>`,

    // ── JUMP ROPE ─────────────────────────────────────────────
    20: `${DEFS}
      <line x1="4" y1="106" x2="106" y2="106" stroke="rgba(148,163,184,0.3)" stroke-width="3"/>
      <path d="M10,98 Q32,110 55,110 Q78,110 100,98" stroke="${E}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <circle cx="55" cy="10" r="9" fill="${F}" stroke="${B}" stroke-width="2"/>
      <rect x="47" y="19" width="16" height="24" rx="7" fill="${F}" stroke="${B}" stroke-width="1.5"/>
      <path d="M47,22 Q38,30 30,34" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <path d="M63,22 Q72,30 80,34" stroke="${B}" stroke-width="8" stroke-linecap="round"/>
      <line x1="28" y1="34" x2="28" y2="68" stroke="${E}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.5"/>
      <line x1="82" y1="34" x2="82" y2="68" stroke="${E}" stroke-width="2.5" stroke-dasharray="4,2" opacity="0.5"/>
      <path d="M49,43 Q43,58 41,72" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M61,43 Q67,58 69,72" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
      <path d="M41,72 Q37,84 38,96" stroke="${B}" stroke-width="9" stroke-linecap="round"/>
      <path d="M69,72 Q73,84 72,96" stroke="${B}" stroke-width="9" stroke-linecap="round"/>
      <path d="M41,72 Q37,84 38,96" stroke="${MG}" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M69,72 Q73,84 72,96" stroke="${MG}" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M41,72 Q37,84 38,96" stroke="${M}" stroke-width="4.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M69,72 Q73,84 72,96" stroke="${M}" stroke-width="4.5" stroke-linecap="round" opacity="0.9"/>
      ${arrowUp(55,28)}`,
  };

  const content = svgs[ex.id];
  if (!content) return `<div style="font-size:2.8rem;text-align:center;padding-top:30px">${ex.emoji}</div>`;
  return `<svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

function groupLabel(g) {
  return { chest:'หน้าอก', back:'หลัง', legs:'ขา', shoulders:'ไหล่', arms:'แขน', core:'คอร์', cardio:'คาร์ดิโอ' }[g] || g;
}
function levelColor(l) {
  return { 'ง่าย':'green', 'ปานกลาง':'amber', 'ยาก':'' }[l] || '';
}

function filterByGroup(group, btn) {
  currentFilter = group;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderExercises(group, document.getElementById('searchInput').value);
}

function filterExercises() {
  renderExercises(currentFilter, document.getElementById('searchInput').value);
}

// ===== EXERCISE MODAL =====
function openExModal(id) {
  currentExercise = EXERCISES.find(e => e.id === id);
  if (!currentExercise) return;
  const ex = currentExercise;
  const modalArt = document.getElementById('modalArt');
  modalArt.style.background = ex.grad;
  modalArt.innerHTML = `
    <img class="ex-modal-img" src="${ex.img}" alt="${ex.name}"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" loading="lazy"/>
    <div class="ex-card-img-fallback" style="display:none">${makeExerciseSVG(ex)}</div>
  `;
  document.getElementById('modalName').textContent = ex.name;
  document.getElementById('modalDesc').textContent = ex.desc;
  document.getElementById('modalMuscle').textContent = ex.muscle;
  document.getElementById('modalLevel').textContent = ex.level;
  document.getElementById('modalEquip').textContent = ex.equip;
  document.getElementById('modalTags').innerHTML = `
    <span class="ex-tag">${groupLabel(ex.group)}</span>
    <span class="ex-tag ${levelColor(ex.level)}">${ex.level}</span>
    <span class="ex-tag cyan">${ex.equip}</span>
  `;
  document.getElementById('modalSets').innerHTML = ex.sets.map(s => `
    <div class="set-row"><span>${s.label}</span><b>${s.val}</b></div>
  `).join('');
  document.getElementById('exModal').classList.add('open');
}

function closeExModal() {
  document.getElementById('exModal').classList.remove('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('exModal')) closeExModal();
}

function addToWorkout() {
  if (!currentExercise) return;
  const ex = currentExercise;
  const existing = sessionExercises.find(e => e.name === ex.name);
  if (!existing) {
    sessionExercises.push({ name: ex.name, sets: 3, reps: 12, weight: '-', done: false });
    renderSessionExercises();
    showToast(`✅ เพิ่ม ${ex.name} ในเซสชันแล้ว!`);
  } else {
    showToast(`${ex.name} มีในเซสชันอยู่แล้วนะ 😊`);
  }
  closeExModal();
  navigate('workout');
}

// ===== WORKOUT TIMER =====
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerIcon').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    document.getElementById('timerLabel').textContent = 'หยุดชั่วคราว';
  } else {
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
    timerRunning = true;
    document.getElementById('timerIcon').innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    document.getElementById('timerLabel').textContent = 'เวลาที่ใช้';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  updateTimerDisplay();
  document.getElementById('timerIcon').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
  document.getElementById('timerLabel').textContent = 'เวลาที่ใช้';
  document.getElementById('timerArc').style.strokeDashoffset = '534';
}

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const s = (timerSeconds % 60).toString().padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${m}:${s}`;
  const maxSecs = 3600;
  const progress = Math.min(timerSeconds / maxSecs, 1);
  const circumference = 534;
  document.getElementById('timerArc').style.strokeDashoffset = circumference * (1 - progress);
}

function startRest() {
  const restBar = document.getElementById('restBar');
  restBar.style.display = 'block';
  restSeconds = 90;
  clearInterval(restInterval);
  updateRestDisplay();
  restInterval = setInterval(() => {
    restSeconds--;
    updateRestDisplay();
    if (restSeconds <= 0) {
      clearInterval(restInterval);
      restBar.style.display = 'none';
      showToast('⏰ พักครบแล้ว! เริ่มเซ็ตต่อไปได้เลยค่ะ 💪');
    }
  }, 1000);
}

function updateRestDisplay() {
  document.getElementById('restCountdown').textContent = `${restSeconds}s`;
  const pct = (restSeconds / 90) * 100;
  document.getElementById('restFill').style.width = `${pct}%`;
}

function renderSessionExercises() {
  renderSessionExercisesWithRecs({});
}

function renderSessionExercisesWithRecs(recs) {
  const container = document.getElementById('sessionExercises');
  const firstNotDone = sessionExercises.findIndex(e => !e.done);
  container.innerHTML = sessionExercises.map((ex, i) => {
    const rec = recs[ex.name];
    const displayWeight = rec ? `${rec.weight} kg` : ex.weight;
    const recNote = rec
      ? `<div class="sess-rec-note">${rec.reasoning} (ครั้งก่อน ${rec.prevWeight} kg)</div>`
      : '';
    const recBadge = rec
      ? `<span class="sess-rec-badge">${rec.delta > 0 ? '▲' : rec.delta < 0 ? '▼' : '='} แนะนำ</span>`
      : '';
    return `
      <div class="sess-ex ${ex.done ? 'done-ex' : i === firstNotDone ? 'active-ex' : ''}"
           onclick="toggleSessionExercise(${i})">
        <div class="sess-ex-check ${ex.done ? 'checked' : ''}">
          ${ex.done ? '✓' : (i + 1)}
        </div>
        <div class="sess-ex-info">
          <div class="sess-ex-name">${ex.name}</div>
          <div class="sess-ex-sets">${ex.sets} เซ็ต × ${ex.reps} ครั้ง</div>
          ${recNote}
        </div>
        <div style="text-align:right">
          <div class="sess-ex-weight">${displayWeight}</div>
          ${recBadge}
        </div>
      </div>`;
  }).join('');
}

function toggleSessionExercise(idx) {
  sessionExercises[idx].done = !sessionExercises[idx].done;
  renderSessionExercises();
  const all = sessionExercises.every(e => e.done);
  if (all) showToast('🎉 เทรนครบทุกท่าแล้ว! เก่งมากค่ะ!');
}

function endWorkout() {
  clearInterval(timerInterval);
  const mins = Math.floor(timerSeconds / 60);
  const done = sessionExercises.filter(e => e.done).length;
  showToast(`💪 จบการเทรน! ${done}/${sessionExercises.length} ท่า • ${mins} นาที`);
  resetTimer();
  sessionExercises = SESSION_EXERCISES.map(e => ({ ...e }));
  renderSessionExercises();
  navigate('progress');
}

// ===== PLANS WIZARD =====
const planState = { location: null, equipment: new Set(), goal: null };

const EQUIPMENT_GYM = [
  { id:'barbell', icon:'🏋️', name:'บาร์เบล & แร็ค', sub:'Squat, Bench, Deadlift' },
  { id:'dumbbell', icon:'💪', name:'ดัมเบล', sub:'Free weights' },
  { id:'cable', icon:'🔗', name:'เคเบิลแมชชีน', sub:'Cable station' },
  { id:'machine', icon:'🖥️', name:'เครื่องออกกำลังกาย', sub:'Leg press, Lat pulldown ฯลฯ' },
  { id:'pullup', icon:'⬆️', name:'บาร์โหน', sub:'Pull-up / Chin-up bar' },
  { id:'bench', icon:'🛋️', name:'ม้านั่ง', sub:'Flat / Incline bench' },
  { id:'cardio_eq', icon:'🏃', name:'อุปกรณ์คาร์ดิโอ', sub:'ลู่วิ่ง, จักรยาน' },
  { id:'kettlebell', icon:'🫙', name:'เคตเทิลเบล', sub:'Kettlebell' },
];

const EQUIPMENT_HOME = [
  { id:'none', icon:'🧘', name:'ไม่มีอุปกรณ์', sub:'Bodyweight only', cls:'none-card' },
  { id:'dumbbell', icon:'💪', name:'ดัมเบล', sub:'อย่างน้อย 1 คู่' },
  { id:'barbell', icon:'🏋️', name:'บาร์เบล & แร็ค', sub:'Home gym setup' },
  { id:'pullup', icon:'⬆️', name:'บาร์โหน', sub:'Door frame / Stand' },
  { id:'resistance_band', icon:'🪢', name:'Resistance Band', sub:'ยางแรงดึง' },
  { id:'bench', icon:'🛋️', name:'ม้านั่ง / กล่อง', sub:'สำหรับ step, dip' },
  { id:'kettlebell', icon:'🫙', name:'เคตเทิลเบล', sub:'Kettlebell' },
  { id:'cardio_eq', icon:'🚴', name:'จักรยาน / ลู่วิ่ง', sub:'Cardio equipment' },
];

function selectLocation(loc) {
  planState.location = loc;
  planState.equipment.clear();
  document.querySelectorAll('.loc-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`loc-${loc}`).classList.add('selected');
  setTimeout(() => { wizGo(2); renderEquipGrid(); }, 250);
}

function renderEquipGrid() {
  const list = planState.location === 'gym' ? EQUIPMENT_GYM : EQUIPMENT_HOME;
  document.getElementById('equipGrid').innerHTML = list.map(eq => `
    <div class="equip-card ${eq.cls||''}" id="eq-${eq.id}" onclick="toggleEquip('${eq.id}','${eq.cls||''}')">
      <div class="equip-icon">${eq.icon}</div>
      <div class="equip-name">${eq.name}</div>
      <div class="equip-sub">${eq.sub}</div>
      <div class="equip-check"></div>
    </div>
  `).join('');
}

function toggleEquip(id, cls) {
  const card = document.getElementById(`eq-${id}`);
  if (id === 'none') {
    planState.equipment.clear();
    document.querySelectorAll('.equip-card').forEach(c => c.classList.remove('selected'));
    planState.equipment.add('none');
    card.classList.add('selected');
  } else {
    document.getElementById('eq-none')?.classList.remove('selected');
    planState.equipment.delete('none');
    if (planState.equipment.has(id)) {
      planState.equipment.delete(id);
      card.classList.remove('selected');
    } else {
      planState.equipment.add(id);
      card.classList.add('selected');
    }
  }
}

function selectGoal(goal, el) {
  planState.goal = goal;
  document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  setTimeout(() => { wizGo(4); renderGeneratedProgram(); }, 280);
}

function wizGo(step) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`plansStep${i}`).style.display = i === step ? 'block' : 'none';
    const ws = document.getElementById(`ws${i}`);
    ws.classList.remove('active', 'done');
    if (i < step) ws.classList.add('done');
    else if (i === step) ws.classList.add('active');
    const wl = document.getElementById(`wl${i}`);
    if (wl) wl.classList.toggle('done', i < step);
  }
}

// ===== PROGRAM GENERATOR =====
const PROGRAMS = {
  fat_loss: {
    gym: {
      name: 'Fat Burner — ยิม', emoji: '🔥',
      desc: 'Circuit training + Cardio interval เผาผลาญสูงสุด รักษากล้ามเนื้อ',
      grad: 'linear-gradient(135deg,#7f1d1d,#1a0a3e)',
      weeks: 8, daysPerWeek: 4, duration: '50–60', difficulty: 'ปานกลาง',
      principle: 'Metabolic Resistance Training + HIIT',
      schedule: [
        { day:'จ', type:'workout', label:'Upper Circuit' },
        { day:'อ', type:'cardio', label:'HIIT' },
        { day:'พ', type:'workout', label:'Lower Circuit' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Full Body' },
        { day:'ส', type:'cardio', label:'Steady State' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Upper Circuit — หน้าอก / หลัง / ไหล่', focus:'หน้าอก · หลัง · ไหล่', exercises:[
          { name:'Bench Press', sets:'4', reps:'12', rest:'45s', note:'superset ↓' },
          { name:'Barbell Row', sets:'4', reps:'12', rest:'45s', note:'superset' },
          { name:'OHP', sets:'3', reps:'15', rest:'45s', note:'superset ↓' },
          { name:'Lat Pulldown', sets:'3', reps:'15', rest:'45s', note:'superset' },
          { name:'Lateral Raise', sets:'3', reps:'20', rest:'30s', note:'' },
          { name:'Plank', sets:'3', reps:'45s', rest:'30s', note:'' },
        ]},
        { name:'HIIT Cardio', focus:'คาร์ดิโอ · เผาผลาญ', exercises:[
          { name:'Warm-up เดินเร็ว', sets:'1', reps:'5 นาที', rest:'-', note:'' },
          { name:'Sprint 90%', sets:'10', reps:'20s', rest:'40s', note:'ทำสลับกัน' },
          { name:'Jump Squat', sets:'3', reps:'15', rest:'30s', note:'' },
          { name:'Burpee', sets:'3', reps:'12', rest:'30s', note:'' },
          { name:'Cool-down', sets:'1', reps:'5 นาที', rest:'-', note:'' },
        ]},
        { name:'Lower Circuit — ขา / สะโพก', focus:'ขา · สะโพก · Core', exercises:[
          { name:'Squat', sets:'4', reps:'15', rest:'45s', note:'superset ↓' },
          { name:'Romanian Deadlift', sets:'4', reps:'12', rest:'45s', note:'superset' },
          { name:'Leg Press', sets:'3', reps:'20', rest:'45s', note:'' },
          { name:'Walking Lunge', sets:'3', reps:'16 steps', rest:'30s', note:'' },
          { name:'Cable Crunch', sets:'3', reps:'20', rest:'30s', note:'' },
          { name:'Leg Raise', sets:'3', reps:'15', rest:'30s', note:'' },
        ]},
        { name:'Full Body Finisher', focus:'ทั้งตัว · เผาผลาญ', exercises:[
          { name:'Deadlift', sets:'3', reps:'12', rest:'60s', note:'' },
          { name:'Push-up', sets:'3', reps:'20', rest:'30s', note:'superset ↓' },
          { name:'Dumbbell Row', sets:'3', reps:'12/side', rest:'30s', note:'superset' },
          { name:'Goblet Squat', sets:'3', reps:'15', rest:'30s', note:'' },
          { name:'Face Pull', sets:'3', reps:'20', rest:'30s', note:'' },
          { name:'Jump Rope', sets:'3', reps:'2 นาที', rest:'30s', note:'' },
        ]},
      ],
    },
    home: {
      name: 'Home Fat Burner', emoji: '🔥',
      desc: 'HIIT + Bodyweight circuit เผาผลาญที่บ้าน ไม่ต้องออกไปยิม',
      grad: 'linear-gradient(135deg,#7f1d1d,#0a1830)',
      weeks: 8, daysPerWeek: 4, duration: '40–50', difficulty: 'ปานกลาง',
      principle: 'HIIT + Bodyweight Circuits',
      schedule: [
        { day:'จ', type:'workout', label:'Upper HIIT' },
        { day:'อ', type:'cardio', label:'Cardio' },
        { day:'พ', type:'workout', label:'Lower HIIT' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Full HIIT' },
        { day:'ส', type:'cardio', label:'Walk/Run' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Upper HIIT — หน้าอก / หลัง / ไหล่', focus:'หน้าอก · หลัง · ไหล่', exercises:[
          { name:'Push-up', sets:'4', reps:'20', rest:'30s', note:'ปรับจากดัมเบลถ้ามี' },
          { name:'Pike Push-up', sets:'3', reps:'12', rest:'30s', note:'' },
          { name:'Dumbbell Row', sets:'4', reps:'15/side', rest:'30s', note:'ถ้ามีดัมเบล' },
          { name:'Superman Hold', sets:'3', reps:'12', rest:'30s', note:'' },
          { name:'Lateral Raise (Band)', sets:'3', reps:'20', rest:'30s', note:'' },
          { name:'Plank to Push-up', sets:'3', reps:'10', rest:'30s', note:'' },
        ]},
        { name:'Cardio Day', focus:'หัวใจ · เผาผลาญ', exercises:[
          { name:'Jump Rope / Running', sets:'1', reps:'20–30 นาที', rest:'-', note:'' },
          { name:'Jumping Jack', sets:'3', reps:'50', rest:'20s', note:'' },
          { name:'Mountain Climber', sets:'3', reps:'30s', rest:'20s', note:'' },
        ]},
        { name:'Lower HIIT — ขา / สะโพก', focus:'ขา · สะโพก · Core', exercises:[
          { name:'Bodyweight Squat', sets:'4', reps:'25', rest:'30s', note:'' },
          { name:'Jump Squat', sets:'3', reps:'15', rest:'30s', note:'' },
          { name:'Bulgarian Split Squat', sets:'3', reps:'12/side', rest:'30s', note:'' },
          { name:'Glute Bridge', sets:'4', reps:'20', rest:'25s', note:'เพิ่ม band ถ้ามี' },
          { name:'Leg Raise', sets:'3', reps:'20', rest:'30s', note:'' },
          { name:'Burpee', sets:'3', reps:'10', rest:'30s', note:'' },
        ]},
        { name:'Full Body HIIT Finisher', focus:'ทั้งตัว · สูงสุด', exercises:[
          { name:'Burpee', sets:'3', reps:'12', rest:'30s', note:'' },
          { name:'Push-up', sets:'3', reps:'15', rest:'20s', note:'' },
          { name:'Squat Jump', sets:'3', reps:'15', rest:'30s', note:'' },
          { name:'Mountain Climber', sets:'3', reps:'30s', rest:'20s', note:'' },
          { name:'Plank', sets:'3', reps:'45s', rest:'20s', note:'' },
        ]},
      ],
    },
  },
  muscle: {
    gym: {
      name: 'PPL Hypertrophy — ยิม', emoji: '💪',
      desc: 'Push Pull Legs เน้น volume สูง เพิ่มมวลกล้ามเนื้อสูงสุด',
      grad: 'linear-gradient(135deg,#1e1b4b,#0c4a6e)',
      weeks: 12, daysPerWeek: 6, duration: '60–75', difficulty: 'ปานกลาง-ยาก',
      principle: 'Push Pull Legs × 2 / Progressive Overload',
      schedule: [
        { day:'จ', type:'workout', label:'Push' },
        { day:'อ', type:'workout', label:'Pull' },
        { day:'พ', type:'workout', label:'Legs' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Push' },
        { day:'ส', type:'workout', label:'Pull' },
        { day:'อา', type:'workout', label:'Legs' },
      ],
      days: [
        { name:'Push — หน้าอก / ไหล่ / Tricep', focus:'หน้าอก · ไหล่ · Tricep', exercises:[
          { name:'Bench Press', sets:'4', reps:'8–10', rest:'90s', note:'Main lift' },
          { name:'Incline DB Press', sets:'4', reps:'10–12', rest:'75s', note:'' },
          { name:'Cable Flyes', sets:'3', reps:'12–15', rest:'60s', note:'' },
          { name:'OHP', sets:'4', reps:'8–10', rest:'90s', note:'' },
          { name:'Lateral Raise', sets:'5', reps:'15–20', rest:'45s', note:'เน้น Volume' },
          { name:'Tricep Pushdown', sets:'4', reps:'12–15', rest:'60s', note:'' },
          { name:'Overhead Tricep Ext.', sets:'3', reps:'12', rest:'60s', note:'' },
        ]},
        { name:'Pull — หลัง / Bicep / Rear Delt', focus:'หลัง · Bicep · หลังไหล่', exercises:[
          { name:'Pull-up / Weighted', sets:'4', reps:'8–10', rest:'90s', note:'เพิ่มน้ำหนักเมื่อพร้อม' },
          { name:'Barbell Row', sets:'4', reps:'8–10', rest:'90s', note:'Main lift' },
          { name:'Seated Cable Row', sets:'4', reps:'10–12', rest:'75s', note:'' },
          { name:'Lat Pulldown (Close)', sets:'3', reps:'12', rest:'60s', note:'' },
          { name:'Face Pull', sets:'4', reps:'15–20', rest:'45s', note:'สุขภาพไหล่' },
          { name:'Barbell Curl', sets:'4', reps:'10–12', rest:'60s', note:'' },
          { name:'Hammer Curl', sets:'3', reps:'12', rest:'60s', note:'' },
        ]},
        { name:'Legs — ขา / สะโพก', focus:'Quad · Hamstring · Glute', exercises:[
          { name:'Squat', sets:'4', reps:'8–10', rest:'120s', note:'Main lift' },
          { name:'Romanian Deadlift', sets:'4', reps:'10', rest:'90s', note:'' },
          { name:'Leg Press', sets:'4', reps:'12–15', rest:'75s', note:'High foot เน้น ham' },
          { name:'Leg Curl', sets:'4', reps:'10–12', rest:'60s', note:'' },
          { name:'Leg Extension', sets:'3', reps:'15', rest:'60s', note:'' },
          { name:'Calf Raise', sets:'5', reps:'15–20', rest:'45s', note:'' },
        ]},
      ],
    },
    home: {
      name: 'Home Muscle Builder', emoji: '💪',
      desc: 'สร้างกล้ามเนื้อที่บ้าน ใช้ดัมเบล + bodyweight progressive',
      grad: 'linear-gradient(135deg,#1e1b4b,#082f49)',
      weeks: 10, daysPerWeek: 4, duration: '50–60', difficulty: 'ปานกลาง',
      principle: 'Upper/Lower Split + Progressive Overload',
      schedule: [
        { day:'จ', type:'workout', label:'Upper A' },
        { day:'อ', type:'rest', label:'Rest' },
        { day:'พ', type:'workout', label:'Lower A' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Upper B' },
        { day:'ส', type:'workout', label:'Lower B' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Upper A — กดออก (Push emphasis)', focus:'หน้าอก · ไหล่ · Tricep', exercises:[
          { name:'Push-up (weighted/archer)', sets:'4', reps:'10–15', rest:'75s', note:'Progressive' },
          { name:'DB Overhead Press', sets:'4', reps:'10–12', rest:'75s', note:'' },
          { name:'DB Lateral Raise', sets:'4', reps:'15–20', rest:'45s', note:'' },
          { name:'DB Flyes', sets:'3', reps:'12–15', rest:'60s', note:'' },
          { name:'Diamond Push-up', sets:'3', reps:'12', rest:'60s', note:'Tricep focus' },
        ]},
        { name:'Lower A — Quad emphasis', focus:'ต้นขาหน้า · Core', exercises:[
          { name:'Goblet Squat', sets:'4', reps:'12–15', rest:'75s', note:'เพิ่ม weight' },
          { name:'Bulgarian Split Squat', sets:'4', reps:'10/side', rest:'75s', note:'' },
          { name:'DB Romanian Deadlift', sets:'4', reps:'10–12', rest:'75s', note:'' },
          { name:'Glute Bridge', sets:'4', reps:'15', rest:'60s', note:'' },
          { name:'Calf Raise', sets:'4', reps:'20', rest:'45s', note:'' },
        ]},
        { name:'Upper B — ดึง (Pull emphasis)', focus:'หลัง · Bicep', exercises:[
          { name:'Pull-up / Inverted Row', sets:'4', reps:'8–12', rest:'90s', note:'บาร์โหน ถ้ามี' },
          { name:'DB Bent-over Row', sets:'4', reps:'10–12', rest:'75s', note:'' },
          { name:'DB Curl', sets:'4', reps:'10–12', rest:'60s', note:'' },
          { name:'Rear Delt Fly', sets:'3', reps:'15', rest:'45s', note:'' },
          { name:'Superman', sets:'3', reps:'12', rest:'45s', note:'Lower back' },
        ]},
        { name:'Lower B — Hamstring / Glute', focus:'หลังขา · สะโพก', exercises:[
          { name:'DB Deadlift', sets:'4', reps:'10–12', rest:'90s', note:'' },
          { name:'Hip Thrust', sets:'4', reps:'12–15', rest:'75s', note:'เพิ่ม weight' },
          { name:'Sumo Squat', sets:'3', reps:'15', rest:'60s', note:'Inner thigh' },
          { name:'Nordic Curl', sets:'3', reps:'6–10', rest:'90s', note:'หลังขา' },
          { name:'Hanging Leg Raise', sets:'3', reps:'12', rest:'45s', note:'' },
        ]},
      ],
    },
  },
  strength: {
    gym: {
      name: 'Powerlifting Strength', emoji: '⚡',
      desc: 'Linear progression บน Big 3 — Squat, Bench, Deadlift เพิ่ม PR ทุกสัปดาห์',
      grad: 'linear-gradient(135deg,#1c0533,#0c1a3e)',
      weeks: 12, daysPerWeek: 4, duration: '75–90', difficulty: 'ยาก',
      principle: 'Linear Progression / 5×5 / 531 Methodology',
      schedule: [
        { day:'จ', type:'workout', label:'Squat+Bench' },
        { day:'อ', type:'rest', label:'Rest' },
        { day:'พ', type:'workout', label:'Dead+OHP' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Squat+Bench' },
        { day:'ส', type:'workout', label:'Accessory' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Squat + Bench Day', focus:'ขา · หน้าอก (ความแข็งแรง)', exercises:[
          { name:'Squat (Heavy)', sets:'5', reps:'5 @ 80–85%', rest:'3–5 นาที', note:'Main lift เพิ่ม 2.5kg/สัปดาห์' },
          { name:'Paused Squat', sets:'3', reps:'3 @ 70%', rest:'3 นาที', note:'pause 2s ที่ด้านล่าง' },
          { name:'Bench Press (Heavy)', sets:'5', reps:'5 @ 80%', rest:'3 นาที', note:'Main lift' },
          { name:'Close Grip Bench', sets:'3', reps:'6', rest:'2 นาที', note:'Tricep strength' },
          { name:'Leg Curl', sets:'3', reps:'10', rest:'60s', note:'Accessory' },
        ]},
        { name:'Deadlift + OHP Day', focus:'หลัง · ไหล่ (ความแข็งแรง)', exercises:[
          { name:'Deadlift (Heavy)', sets:'1', reps:'5 @ 85%', rest:'5 นาที', note:'Top set หนักสุด' },
          { name:'Romanian Deadlift', sets:'4', reps:'5 @ 70%', rest:'3 นาที', note:'Back-off set' },
          { name:'OHP (Heavy)', sets:'5', reps:'5 @ 80%', rest:'3 นาที', note:'Main lift' },
          { name:'Barbell Row', sets:'4', reps:'5', rest:'2 นาที', note:'Upper back' },
          { name:'Face Pull', sets:'3', reps:'20', rest:'45s', note:'Shoulder health' },
        ]},
        { name:'Squat + Bench (Volume)', focus:'ขา · หน้าอก (volume)', exercises:[
          { name:'Squat (Volume)', sets:'5', reps:'8 @ 70%', rest:'2 นาที', note:'เพิ่ม volume ต่ำกว่า heavy day' },
          { name:'Front Squat', sets:'3', reps:'5', rest:'2 นาที', note:'Quad strength' },
          { name:'Bench Press (Volume)', sets:'5', reps:'8 @ 70%', rest:'2 นาที', note:'' },
          { name:'Incline Bench', sets:'3', reps:'8', rest:'90s', note:'Upper chest' },
          { name:'Tricep Dips', sets:'3', reps:'10', rest:'90s', note:'' },
        ]},
        { name:'Accessory Day', focus:'แก้จุดอ่อน · สุขภาพ', exercises:[
          { name:'Pull-up (Weighted)', sets:'5', reps:'5', rest:'2 นาที', note:'Back strength' },
          { name:'Bulgarian Split Squat', sets:'4', reps:'8/side', rest:'90s', note:'Leg balance' },
          { name:'Barbell Curl', sets:'4', reps:'8', rest:'60s', note:'' },
          { name:'Lateral Raise', sets:'4', reps:'15', rest:'45s', note:'' },
          { name:'Ab Wheel / Plank', sets:'3', reps:'10/45s', rest:'45s', note:'Core stability' },
        ]},
      ],
    },
    home: {
      name: 'Home Calisthenics Strength', emoji: '⚡',
      desc: 'ความแข็งแรงแบบ bodyweight — Handstand, Planche, Front Lever progression',
      grad: 'linear-gradient(135deg,#1c0533,#091a38)',
      weeks: 12, daysPerWeek: 3, duration: '60–75', difficulty: 'ยาก',
      principle: 'Skill-based Calisthenics Progression',
      schedule: [
        { day:'จ', type:'workout', label:'Push Skills' },
        { day:'อ', type:'rest', label:'Rest' },
        { day:'พ', type:'workout', label:'Pull Skills' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Legs+Core' },
        { day:'ส', type:'cardio', label:'Active' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Push Skills — หน้าอก / ไหล่ / Tricep', focus:'หน้าอก · ไหล่ · Push', exercises:[
          { name:'Handstand Practice', sets:'5', reps:'30s hold', rest:'90s', note:'หรือ Pike push-up' },
          { name:'Archer Push-up', sets:'4', reps:'6/side', rest:'90s', note:'One arm progression' },
          { name:'Dips (Parallel bars)', sets:'4', reps:'8–10', rest:'90s', note:'' },
          { name:'Pike Push-up', sets:'4', reps:'10', rest:'75s', note:'' },
          { name:'L-sit', sets:'4', reps:'20s', rest:'60s', note:'Core + hip flexor' },
        ]},
        { name:'Pull Skills — หลัง / Bicep', focus:'หลัง · Bicep · Pull', exercises:[
          { name:'Weighted Pull-up', sets:'5', reps:'5', rest:'2 นาที', note:'ใส่น้ำหนักหากมี' },
          { name:'Chin-up', sets:'4', reps:'8', rest:'90s', note:'' },
          { name:'Inverted Row', sets:'4', reps:'10–12', rest:'75s', note:'Horizontal pull' },
          { name:'Toes to Bar', sets:'3', reps:'10', rest:'60s', note:'Hanging core' },
          { name:'Negative Muscle-up', sets:'3', reps:'5', rest:'90s', note:'Progression' },
        ]},
        { name:'Legs + Core', focus:'ขา · Core · Stability', exercises:[
          { name:'Pistol Squat', sets:'4', reps:'5/side', rest:'90s', note:'หรือ assisted' },
          { name:'Nordic Curl', sets:'4', reps:'6', rest:'90s', note:'Hamstring strength' },
          { name:'Shrimp Squat', sets:'3', reps:'8/side', rest:'75s', note:'' },
          { name:'Dragon Flag', sets:'3', reps:'6', rest:'90s', note:'หรือ tuck version' },
          { name:'Hollow Body Hold', sets:'3', reps:'30s', rest:'45s', note:'' },
        ]},
      ],
    },
  },
  endurance: {
    gym: {
      name: 'Endurance & Stamina', emoji: '🏃',
      desc: 'High volume circuit + Cardio เพิ่มความอดทน หัวใจแข็งแรง',
      grad: 'linear-gradient(135deg,#0c4a6e,#0a1a0a)',
      weeks: 8, daysPerWeek: 5, duration: '45–60', difficulty: 'ปานกลาง',
      principle: 'Cardiovascular + Muscular Endurance',
      schedule: [
        { day:'จ', type:'workout', label:'Circuit A' },
        { day:'อ', type:'cardio', label:'Cardio' },
        { day:'พ', type:'workout', label:'Circuit B' },
        { day:'พฤ', type:'cardio', label:'Cardio' },
        { day:'ศ', type:'workout', label:'Circuit C' },
        { day:'ส', type:'cardio', label:'Long Run' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Circuit A — Upper Body', focus:'หน้าอก · หลัง · ไหล่ (endurance)', exercises:[
          { name:'Push-up', sets:'4', reps:'25', rest:'30s', note:'' },
          { name:'Dumbbell Row', sets:'4', reps:'20/side', rest:'30s', note:'' },
          { name:'Lateral Raise', sets:'4', reps:'20', rest:'30s', note:'' },
          { name:'Face Pull', sets:'4', reps:'25', rest:'30s', note:'' },
          { name:'Plank', sets:'3', reps:'60s', rest:'20s', note:'' },
        ]},
        { name:'Cardio Zone 2', focus:'หัวใจ · ระยะยาว', exercises:[
          { name:'Zone 2 Running / Cycling', sets:'1', reps:'30–45 นาที @ 65%HR', rest:'-', note:'พูดคุยได้ระหว่างวิ่ง' },
        ]},
        { name:'Circuit B — Lower Body', focus:'ขา · สะโพก (endurance)', exercises:[
          { name:'Squat', sets:'4', reps:'20', rest:'30s', note:'' },
          { name:'Lunge', sets:'4', reps:'16 steps', rest:'30s', note:'' },
          { name:'Calf Raise', sets:'4', reps:'30', rest:'20s', note:'' },
          { name:'Glute Bridge', sets:'4', reps:'20', rest:'30s', note:'' },
          { name:'Mountain Climber', sets:'3', reps:'40s', rest:'20s', note:'' },
        ]},
      ],
    },
    home: {
      name: 'Home Endurance', emoji: '🏃',
      desc: 'Bodyweight + Running สร้างความอดทนทั้งกล้ามเนื้อและหัวใจ',
      grad: 'linear-gradient(135deg,#0c4a6e,#091a10)',
      weeks: 8, daysPerWeek: 5, duration: '40–55', difficulty: 'ปานกลาง',
      principle: 'Cardiovascular + Bodyweight Circuits',
      schedule: [
        { day:'จ', type:'workout', label:'Upper' },
        { day:'อ', type:'cardio', label:'Run' },
        { day:'พ', type:'workout', label:'Lower' },
        { day:'พฤ', type:'cardio', label:'Cardio' },
        { day:'ศ', type:'workout', label:'Full' },
        { day:'ส', type:'cardio', label:'Long Run' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Upper Endurance', focus:'หน้าอก · หลัง · ไหล่', exercises:[
          { name:'Push-up', sets:'5', reps:'20', rest:'20s', note:'' },
          { name:'Inverted Row', sets:'4', reps:'15', rest:'20s', note:'' },
          { name:'Pike Push-up', sets:'4', reps:'15', rest:'25s', note:'' },
          { name:'Superman', sets:'4', reps:'15', rest:'20s', note:'' },
          { name:'Plank', sets:'4', reps:'45s', rest:'15s', note:'' },
        ]},
        { name:'Lower Endurance', focus:'ขา · สะโพก', exercises:[
          { name:'Squat', sets:'5', reps:'25', rest:'20s', note:'' },
          { name:'Jumping Jack', sets:'3', reps:'50', rest:'15s', note:'' },
          { name:'Glute Bridge', sets:'4', reps:'25', rest:'20s', note:'' },
          { name:'Calf Raise', sets:'4', reps:'30', rest:'15s', note:'' },
          { name:'Leg Raise', sets:'3', reps:'20', rest:'20s', note:'' },
        ]},
        { name:'Full Body Circuit', focus:'ทั้งตัว', exercises:[
          { name:'Burpee', sets:'3', reps:'15', rest:'30s', note:'' },
          { name:'Push-up', sets:'3', reps:'20', rest:'20s', note:'' },
          { name:'Squat', sets:'3', reps:'20', rest:'20s', note:'' },
          { name:'Mountain Climber', sets:'3', reps:'40s', rest:'20s', note:'' },
        ]},
      ],
    },
  },
  athletic: {
    gym: {
      name: 'Athletic Performance', emoji: '🏆',
      desc: 'Power + Speed + Agility เหมาะสำหรับนักกีฬาทุกประเภท',
      grad: 'linear-gradient(135deg,#78350f,#1a0a3e)',
      weeks: 10, daysPerWeek: 4, duration: '60–75', difficulty: 'ยาก',
      principle: 'Periodized Power + Plyometrics',
      schedule: [
        { day:'จ', type:'workout', label:'Power Lower' },
        { day:'อ', type:'workout', label:'Power Upper' },
        { day:'พ', type:'rest', label:'Rest' },
        { day:'พฤ', type:'cardio', label:'Speed/Agility' },
        { day:'ศ', type:'workout', label:'Strength' },
        { day:'ส', type:'cardio', label:'Sport Practice' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Power Lower — พลัง+ขา', focus:'พลัง · ขา · Explosiveness', exercises:[
          { name:'Power Clean', sets:'5', reps:'3 @ 75%', rest:'3 นาที', note:'Explosive' },
          { name:'Squat', sets:'4', reps:'5 @ 80%', rest:'3 นาที', note:'' },
          { name:'Box Jump', sets:'5', reps:'5', rest:'90s', note:'สูงสุด' },
          { name:'Romanian Deadlift', sets:'4', reps:'6', rest:'2 นาที', note:'' },
          { name:'Broad Jump', sets:'4', reps:'5', rest:'60s', note:'' },
        ]},
        { name:'Power Upper — พลัง+บน', focus:'พลัง · หน้าอก · ไหล่', exercises:[
          { name:'Bench Press (Speed)', sets:'8', reps:'3 @ 60%', rest:'60s', note:'Explosive concentric' },
          { name:'Push Press', sets:'5', reps:'5', rest:'2 นาที', note:'' },
          { name:'Weighted Pull-up', sets:'5', reps:'5', rest:'2 นาที', note:'' },
          { name:'Med Ball Chest Pass', sets:'5', reps:'8', rest:'60s', note:'' },
          { name:'Barbell Row', sets:'4', reps:'6', rest:'90s', note:'' },
        ]},
        { name:'Speed & Agility', focus:'ความเร็ว · ว่องไว', exercises:[
          { name:'Sprint 20m × 10', sets:'10', reps:'20m', rest:'45s', note:'Max speed' },
          { name:'Lateral Shuffle', sets:'5', reps:'10m/side', rest:'30s', note:'' },
          { name:'Cone Drill (T-drill)', sets:'5', reps:'1 set', rest:'60s', note:'' },
          { name:'Jump Rope (speed)', sets:'5', reps:'1 นาที', rest:'30s', note:'' },
        ]},
        { name:'Strength Foundation', focus:'แข็งแรง · สมดุล', exercises:[
          { name:'Deadlift', sets:'4', reps:'5 @ 80%', rest:'3 นาที', note:'' },
          { name:'Front Squat', sets:'4', reps:'5', rest:'2 นาที', note:'' },
          { name:'Single Leg RDL', sets:'3', reps:'8/side', rest:'90s', note:'Stability' },
          { name:'Farmer Walk', sets:'4', reps:'30m', rest:'60s', note:'' },
          { name:'Core Anti-Rotation', sets:'3', reps:'12/side', rest:'45s', note:'' },
        ]},
      ],
    },
    home: {
      name: 'Home Athletic', emoji: '🏆',
      desc: 'Plyometrics + Bodyweight power training เพิ่มพลังและความเร็ว',
      grad: 'linear-gradient(135deg,#78350f,#0c1a38)',
      weeks: 10, daysPerWeek: 4, duration: '50–60', difficulty: 'ยาก',
      principle: 'Plyometrics + Explosive Bodyweight',
      schedule: [
        { day:'จ', type:'workout', label:'Explosive' },
        { day:'อ', type:'cardio', label:'Speed' },
        { day:'พ', type:'rest', label:'Rest' },
        { day:'พฤ', type:'workout', label:'Power' },
        { day:'ศ', type:'cardio', label:'Agility' },
        { day:'ส', type:'workout', label:'Strength' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Explosive Lower', focus:'พลัง · ขา', exercises:[
          { name:'Box Jump', sets:'5', reps:'5', rest:'90s', note:'สูงสุด' },
          { name:'Jump Squat', sets:'4', reps:'8', rest:'60s', note:'' },
          { name:'Broad Jump', sets:'4', reps:'5', rest:'60s', note:'' },
          { name:'Pistol Squat', sets:'3', reps:'5/side', rest:'90s', note:'' },
          { name:'Sprint 30m × 8', sets:'8', reps:'30m', rest:'45s', note:'' },
        ]},
        { name:'Power Upper', focus:'พลัง · บน', exercises:[
          { name:'Clapping Push-up', sets:'5', reps:'8', rest:'90s', note:'Explosive' },
          { name:'Archer Push-up', sets:'4', reps:'6/side', rest:'90s', note:'' },
          { name:'Weighted Pull-up', sets:'4', reps:'6', rest:'90s', note:'' },
          { name:'Medicine Ball Slam', sets:'4', reps:'10', rest:'45s', note:'ถ้ามี' },
          { name:'Plyometric Dip', sets:'3', reps:'8', rest:'75s', note:'' },
        ]},
        { name:'Strength Foundation', focus:'แข็งแรง · สมดุล', exercises:[
          { name:'Pistol Squat', sets:'4', reps:'8/side', rest:'90s', note:'' },
          { name:'Nordic Curl', sets:'4', reps:'6', rest:'90s', note:'' },
          { name:'One-arm Row', sets:'4', reps:'8/side', rest:'75s', note:'' },
          { name:'Hollow Body Rock', sets:'3', reps:'30s', rest:'45s', note:'' },
          { name:'L-sit', sets:'3', reps:'20s', rest:'60s', note:'' },
        ]},
      ],
    },
  },
  general: {
    gym: {
      name: 'Total Fitness — ยิม', emoji: '🌟',
      desc: 'สมดุลทุกด้าน แข็งแรง ฟิต รูปร่างดี สุขภาพดีระยะยาว',
      grad: 'linear-gradient(135deg,#065f46,#1e1b4b)',
      weeks: 8, daysPerWeek: 4, duration: '50–60', difficulty: 'ปานกลาง',
      principle: 'Balanced Fitness — Strength + Cardio + Flexibility',
      schedule: [
        { day:'จ', type:'workout', label:'Upper' },
        { day:'อ', type:'cardio', label:'Cardio' },
        { day:'พ', type:'workout', label:'Lower' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Full Body' },
        { day:'ส', type:'cardio', label:'Active' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Upper Body', focus:'หน้าอก · หลัง · ไหล่ · แขน', exercises:[
          { name:'Bench Press', sets:'3', reps:'10', rest:'90s', note:'' },
          { name:'Barbell Row', sets:'3', reps:'10', rest:'90s', note:'' },
          { name:'OHP', sets:'3', reps:'10', rest:'75s', note:'' },
          { name:'Lat Pulldown', sets:'3', reps:'12', rest:'75s', note:'' },
          { name:'DB Curl + Tricep', sets:'3', reps:'12', rest:'60s', note:'superset' },
        ]},
        { name:'Lower Body', focus:'ขา · สะโพก · Core', exercises:[
          { name:'Squat', sets:'3', reps:'10', rest:'90s', note:'' },
          { name:'Romanian Deadlift', sets:'3', reps:'10', rest:'90s', note:'' },
          { name:'Leg Press', sets:'3', reps:'15', rest:'75s', note:'' },
          { name:'Calf Raise', sets:'3', reps:'20', rest:'45s', note:'' },
          { name:'Plank', sets:'3', reps:'45s', rest:'30s', note:'' },
        ]},
        { name:'Full Body + Core', focus:'ทั้งตัว · สมดุล', exercises:[
          { name:'Deadlift', sets:'3', reps:'8', rest:'90s', note:'' },
          { name:'Push-up', sets:'3', reps:'15', rest:'60s', note:'' },
          { name:'Dumbbell Row', sets:'3', reps:'12/side', rest:'60s', note:'' },
          { name:'Goblet Squat', sets:'3', reps:'12', rest:'60s', note:'' },
          { name:'Cable Crunch', sets:'3', reps:'15', rest:'45s', note:'' },
        ]},
      ],
    },
    home: {
      name: 'Home Total Fitness', emoji: '🌟',
      desc: 'ฟิตเนสสมดุลทุกด้านที่บ้าน ไม่ต้องใช้อุปกรณ์มาก',
      grad: 'linear-gradient(135deg,#065f46,#0c1a38)',
      weeks: 8, daysPerWeek: 3, duration: '40–50', difficulty: 'ง่าย-ปานกลาง',
      principle: 'Full Body 3x/week + Light Cardio',
      schedule: [
        { day:'จ', type:'workout', label:'Full Body' },
        { day:'อ', type:'cardio', label:'Cardio' },
        { day:'พ', type:'workout', label:'Full Body' },
        { day:'พฤ', type:'rest', label:'Rest' },
        { day:'ศ', type:'workout', label:'Full Body' },
        { day:'ส', type:'cardio', label:'Active' },
        { day:'อา', type:'rest', label:'Rest' },
      ],
      days: [
        { name:'Full Body A', focus:'ทั้งตัว', exercises:[
          { name:'Push-up', sets:'3', reps:'15', rest:'60s', note:'' },
          { name:'Squat', sets:'3', reps:'20', rest:'60s', note:'' },
          { name:'Dumbbell Row', sets:'3', reps:'12/side', rest:'60s', note:'' },
          { name:'Glute Bridge', sets:'3', reps:'20', rest:'45s', note:'' },
          { name:'Plank', sets:'3', reps:'40s', rest:'30s', note:'' },
        ]},
        { name:'Full Body B', focus:'ทั้งตัว (variation)', exercises:[
          { name:'Pike Push-up', sets:'3', reps:'12', rest:'60s', note:'' },
          { name:'Split Squat', sets:'3', reps:'10/side', rest:'60s', note:'' },
          { name:'Superman', sets:'3', reps:'15', rest:'45s', note:'' },
          { name:'Hip Thrust', sets:'3', reps:'15', rest:'60s', note:'' },
          { name:'Bicycle Crunch', sets:'3', reps:'20', rest:'30s', note:'' },
        ]},
        { name:'Full Body C', focus:'ทั้งตัว + cardio', exercises:[
          { name:'Burpee', sets:'3', reps:'10', rest:'30s', note:'' },
          { name:'Diamond Push-up', sets:'3', reps:'12', rest:'45s', note:'' },
          { name:'Jump Squat', sets:'3', reps:'12', rest:'30s', note:'' },
          { name:'Mountain Climber', sets:'3', reps:'30s', rest:'20s', note:'' },
          { name:'Dead Bug', sets:'3', reps:'10', rest:'30s', note:'' },
        ]},
      ],
    },
  },
};

function renderGeneratedProgram() {
  const prog = PROGRAMS[planState.goal]?.[planState.location];
  if (!prog) return;

  const equipList = planState.equipment.size > 0
    ? [...planState.equipment].map(e => {
        const allEq = [...EQUIPMENT_GYM, ...EQUIPMENT_HOME];
        return allEq.find(eq => eq.id === e)?.name || e;
      }).join(' · ')
    : planState.location === 'gym' ? 'อุปกรณ์ยิมครบ' : 'Bodyweight';

  const weekGrid = prog.schedule.map(d => `
    <div class="gen-day-pill ${d.type}">
      <div class="gd-label">${d.day}</div>
      <div class="gd-type">${d.label}</div>
    </div>`).join('');

  const dayDetails = prog.days.map((day, i) => `
    <div class="plan-day">
      <div class="pd-header">
        <span class="pd-day">${day.name}</span>
        <span class="pd-focus">${day.focus}</span>
      </div>
      <div class="pd-list ex-detail-list">
        <div class="pd-ex-header">
          <span>ท่า</span><span>เซ็ต</span><span>ครั้ง</span><span>พัก</span>
        </div>
        ${day.exercises.map(ex => `
          <div class="pd-ex pd-ex-detail">
            <span class="pd-ex-name">${ex.name}${ex.note ? `<small>${ex.note}</small>` : ''}</span>
            <span>${ex.sets}</span>
            <span>${ex.reps}</span>
            <span class="pd-rest">${ex.rest}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');

  document.getElementById('generatedProgram').innerHTML = `
    <div class="gen-banner" style="background:${prog.grad}">
      <div class="gen-banner-icon">${prog.emoji}</div>
      <div>
        <h3>${prog.name}</h3>
        <p>${prog.desc}</p>
        <div class="gen-meta">
          <span>📅 ${prog.weeks} สัปดาห์</span>
          <span>🗓 ${prog.daysPerWeek} วัน/สัปดาห์</span>
          <span>⏱ ${prog.duration} นาที</span>
          <span>⚡ ${prog.difficulty}</span>
        </div>
      </div>
    </div>

    <div class="gen-tags-row">
      <div class="gen-tag-pill">
        <span>${planState.location === 'gym' ? '🏟' : '🏠'}</span>
        <strong>${planState.location === 'gym' ? 'ยิม' : 'บ้าน'}</strong>
      </div>
      <div class="gen-tag-pill">
        <span>🎯</span>
        <strong>${{ fat_loss:'ลดไขมัน', muscle:'เพิ่มกล้ามเนื้อ', strength:'ความแข็งแรง', endurance:'ความอดทน', athletic:'กีฬา/ฟังก์ชัน', general:'ฟิตเนสทั่วไป' }[planState.goal]}</strong>
      </div>
      <div class="gen-tag-pill">
        <span>💡</span>
        <strong style="font-size:0.72rem">${prog.principle}</strong>
      </div>
    </div>

    <div class="gen-week">
      <div class="gen-week-title">ตารางรายสัปดาห์</div>
      <div class="gen-week-grid">${weekGrid}</div>
    </div>

    <div class="equip-note">🔧 อุปกรณ์ที่ใช้: ${equipList}</div>

    <div class="section-header"><h3>รายละเอียดแต่ละวัน</h3></div>
    <div class="gen-days">${dayDetails}</div>
  `;
  wizGo(4);
}

function startGeneratedPlan() {
  const prog = PROGRAMS[planState.goal]?.[planState.location];
  showToast(`✅ เริ่มโปรแกรม "${prog?.name || 'ใหม่'}" แล้วค่ะ!`);
  navigate('workout');
}

// ===== CALENDAR =====
function renderCalendar() {
  const days = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
  const workedDays = [];
  const restDays = [];
  const today = 26;
  let html = `<div class="cal-header">${days.map(d => `<div class="cal-dname">${d}</div>`).join('')}</div><div class="cal-grid">`;
  // April 2026 starts on Wednesday (index 3)
  for (let i = 0; i < 2; i++) html += `<div class="cal-day"></div>`;
  for (let d = 1; d <= 30; d++) {
    let cls = 'cal-day';
    if (d === today) cls += ' today';
    else if (workedDays.includes(d)) cls += ' worked';
    else if (restDays.includes(d)) cls += ' rest-day';
    html += `<div class="${cls}">${d}</div>`;
  }
  html += '</div>';
  document.getElementById('calendarGrid').innerHTML = html;
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
