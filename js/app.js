// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ===== DATA =====
const EXERCISES = [
  // CHEST
  {
    id: 1, name: 'Bench Press', group: 'chest', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'หน้าอก (Pectoralis Major)',
    desc: 'ท่าคลาสสิกสำหรับพัฒนากล้ามเนื้อหน้าอกส่วนกลาง ช่วยเพิ่มทั้งความแข็งแรงและมวลกล้ามเนื้อ เหมาะสำหรับทุกระดับ',
    sets: [{label:'Warm-up',val:'2 × 15 @ 40%'},{label:'Working',val:'4 × 8 @ 75%'},{label:'Drop set',val:'1 × Failure'}],
    color: '#7c3aed', emoji: '🏋️', grad: 'linear-gradient(135deg,#3b0764,#1e1b4b)',
  },
  {
    id: 2, name: 'Incline Dumbbell Press', group: 'chest', level: 'ปานกลาง', equip: 'ดัมเบล',
    muscle: 'หน้าอกบน (Upper Chest)',
    desc: 'เน้นพัฒนาหน้าอกส่วนบน ให้รูปทรงหน้าอกที่เต็มและนูนสวยงาม ควบคู่กับการฝึก Bench Press ปกติ',
    sets: [{label:'Set 1',val:'3 × 12'},{label:'Set 2',val:'3 × 10'},{label:'Set 3',val:'3 × 8'}],
    color: '#7c3aed', emoji: '💪', grad: 'linear-gradient(135deg,#2d1b69,#0c0a1e)',
  },
  {
    id: 3, name: 'Cable Flyes', group: 'chest', level: 'ง่าย', equip: 'เคเบิล',
    muscle: 'หน้าอก (Pectoralis)',
    desc: 'ยืดและบีบกล้ามเนื้อหน้าอกได้อย่างเต็มพิสัย เหมาะสำหรับการเพิ่ม definition และ pump ที่ดีเยี่ยม',
    sets: [{label:'Set 1-3',val:'3 × 15'},{label:'Superset',val:'Crossover 3×12'}],
    color: '#7c3aed', emoji: '🦋', grad: 'linear-gradient(135deg,#1e1b4b,#0f172a)',
  },
  // BACK
  {
    id: 4, name: 'Pull-up', group: 'back', level: 'ยาก', equip: 'บาร์โหน',
    muscle: 'หลังกว้าง (Latissimus Dorsi)',
    desc: 'ราชาแห่งท่าออกกำลังกายส่วนหลัง สร้าง V-taper ที่โดดเด่น พัฒนาความแข็งแรงแบบฟังก์ชัน',
    sets: [{label:'Set 1',val:'3-5 × Max reps'},{label:'Weighted',val:'3 × 6-8'},{label:'Negatives',val:'3 × 5'}],
    color: '#06b6d4', emoji: '🔝', grad: 'linear-gradient(135deg,#0c4a6e,#0f172a)',
  },
  {
    id: 5, name: 'Barbell Row', group: 'back', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'หลังกลาง (Rhomboids, Mid Traps)',
    desc: 'ท่า compound สำคัญสำหรับความหนาและความแข็งแรงของหลัง คู่กันกับ Bench Press เสมอ',
    sets: [{label:'Warm-up',val:'2 × 12'},{label:'Working',val:'4 × 8 @ 70%'},{label:'Pause',val:'2 × 6 (2s hold)'}],
    color: '#06b6d4', emoji: '🎣', grad: 'linear-gradient(135deg,#164e63,#0f172a)',
  },
  {
    id: 6, name: 'Lat Pulldown', group: 'back', level: 'ง่าย', equip: 'เครื่อง',
    muscle: 'หลังกว้าง (Lats)',
    desc: 'ทางเลือกที่ดีสำหรับผู้ที่ยัง Pull-up ไม่ได้ ช่วยพัฒนา lat ให้กว้างและแข็งแรง',
    sets: [{label:'Set 1-4',val:'4 × 12'},{label:'Close grip',val:'2 × 15'}],
    color: '#06b6d4', emoji: '⬇️', grad: 'linear-gradient(135deg,#083344,#0f172a)',
  },
  // LEGS
  {
    id: 7, name: 'Barbell Squat', group: 'legs', level: 'ยาก', equip: 'บาร์เบล',
    muscle: 'ต้นขา หน้า+หลัง, สะโพก (Quads, Glutes, Hams)',
    desc: 'ราชาแห่งท่าขา! พัฒนาทั้งความแข็งแรง มวลกล้ามเนื้อ และการเผาผลาญ มากที่สุดในท่าเดียว',
    sets: [{label:'Warm-up',val:'2 × 10'},{label:'Working',val:'5 × 5 @ 80%'},{label:'Back-off',val:'2 × 10 @ 65%'}],
    color: '#10b981', emoji: '🦵', grad: 'linear-gradient(135deg,#064e3b,#0f172a)',
  },
  {
    id: 8, name: 'Romanian Deadlift', group: 'legs', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'หลังต้นขา, สะโพก (Hamstrings, Glutes)',
    desc: 'เน้นยืด Hamstring และ Glute อย่างเต็มที่ ช่วยพัฒนา posterior chain และป้องกันบาดเจ็บ',
    sets: [{label:'Set 1-4',val:'4 × 10-12'},{label:'Paused',val:'2 × 8 (3s hold)'}],
    color: '#10b981', emoji: '🍑', grad: 'linear-gradient(135deg,#052e16,#0f172a)',
  },
  {
    id: 9, name: 'Leg Press', group: 'legs', level: 'ง่าย', equip: 'เครื่อง',
    muscle: 'ต้นขาหน้า (Quadriceps)',
    desc: 'เน้น quad overload ได้อย่างปลอดภัย ดีสำหรับ volume สูงเพื่อเพิ่มมวลกล้ามเนื้อ',
    sets: [{label:'Set 1-4',val:'4 × 15'},{label:'Drop set',val:'1 × Failure'}],
    color: '#10b981', emoji: '🦿', grad: 'linear-gradient(135deg,#14532d,#0f172a)',
  },
  // SHOULDERS
  {
    id: 10, name: 'Overhead Press', group: 'shoulders', level: 'ปานกลาง', equip: 'บาร์เบล',
    muscle: 'ไหล่หน้า, ไหล่กลาง (Anterior + Medial Deltoid)',
    desc: 'ท่าหลักสำหรับไหล่ที่กว้างและแข็งแรง เป็น indicator ของความแข็งแรงส่วนบนที่ดีที่สุด',
    sets: [{label:'Warm-up',val:'2 × 12'},{label:'Working',val:'4 × 8'},{label:'Push Press',val:'2 × 5'}],
    color: '#f59e0b', emoji: '🏹', grad: 'linear-gradient(135deg,#78350f,#0f172a)',
  },
  {
    id: 11, name: 'Lateral Raise', group: 'shoulders', level: 'ง่าย', equip: 'ดัมเบล',
    muscle: 'ไหล่กลาง (Medial Deltoid)',
    desc: 'ท่าที่ขาดไม่ได้สำหรับสร้างไหล่กว้าง ต้องทำ volume สูงเพื่อผลลัพธ์ที่ดีที่สุด',
    sets: [{label:'Set 1-5',val:'5 × 20-25'},{label:'Cable',val:'3 × 20 (each side)'}],
    color: '#f59e0b', emoji: '✈️', grad: 'linear-gradient(135deg,#451a03,#0f172a)',
  },
  {
    id: 12, name: 'Face Pull', group: 'shoulders', level: 'ง่าย', equip: 'เคเบิล',
    muscle: 'ไหล่หลัง, Rotator Cuff (Rear Deltoid)',
    desc: 'ท่าที่หลายคนมองข้าม แต่สำคัญมากสำหรับสุขภาพไหล่ ป้องกันบาดเจ็บ และ posture ที่ดี',
    sets: [{label:'Set 1-4',val:'4 × 15-20'},{label:'External rotation',val:'2 × 15'}],
    color: '#f59e0b', emoji: '🎯', grad: 'linear-gradient(135deg,#431407,#0f172a)',
  },
  // ARMS
  {
    id: 13, name: 'Barbell Curl', group: 'arms', level: 'ง่าย', equip: 'บาร์เบล',
    muscle: 'ไบเซ็ป (Biceps Brachii)',
    desc: 'ท่าคลาสสิกที่ดีที่สุดสำหรับพัฒนา bicep peak ใช้น้ำหนักที่เหมาะสมเพื่อ squeeze ที่ด้านบน',
    sets: [{label:'Set 1-4',val:'4 × 10-12'},{label:'21s',val:'3 sets'}],
    color: '#ef4444', emoji: '💪', grad: 'linear-gradient(135deg,#450a0a,#0f172a)',
  },
  {
    id: 14, name: 'Skull Crusher', group: 'arms', level: 'ปานกลาง', equip: 'EZ Bar',
    muscle: 'ไตรเซ็ป (Triceps)',
    desc: 'ท่าที่มีประสิทธิภาพสูงสุดสำหรับ long head ของ tricep ช่วยสร้างแขนหลังที่นูนและแข็งแรง',
    sets: [{label:'Set 1-4',val:'4 × 10-12'},{label:'Superset',val:'+ Close grip press 4×8'}],
    color: '#ef4444', emoji: '💀', grad: 'linear-gradient(135deg,#3b0000,#0f172a)',
  },
  {
    id: 15, name: 'Hammer Curl', group: 'arms', level: 'ง่าย', equip: 'ดัมเบล',
    muscle: 'Brachialis, Brachioradialis',
    desc: 'ช่วยเพิ่มความหนาของแขน พัฒนา Brachialis ที่ดันให้ bicep ดูสูงขึ้น',
    sets: [{label:'Set 1-3',val:'3 × 12-15 (each)'},{label:'Alternating',val:'3 × 10'}],
    color: '#ef4444', emoji: '🔨', grad: 'linear-gradient(135deg,#3c0000,#0f172a)',
  },
  // CORE
  {
    id: 16, name: 'Plank', group: 'core', level: 'ง่าย', equip: 'ไม่ต้องมีอุปกรณ์',
    muscle: 'แกนกลางลำตัว (Transverse Abdominis, Obliques)',
    desc: 'ท่าพื้นฐานที่สร้างความมั่นคงของแกนกลางลำตัว ช่วยทุกท่าออกกำลังกายอื่น',
    sets: [{label:'Time',val:'3 × 60 วินาที'},{label:'Side plank',val:'3 × 45s (each)'},{label:'RKC plank',val:'3 × 30s'}],
    color: '#8b5cf6', emoji: '🧘', grad: 'linear-gradient(135deg,#2e1065,#0f172a)',
  },
  {
    id: 17, name: 'Cable Crunch', group: 'core', level: 'ง่าย', equip: 'เคเบิล',
    muscle: 'หน้าท้อง (Rectus Abdominis)',
    desc: 'ท่าเดียวที่ใส่ resistance ได้ตรงๆ บน abs ช่วยพัฒนา six-pack ได้อย่างมีประสิทธิภาพ',
    sets: [{label:'Set 1-4',val:'4 × 15-20'}],
    color: '#8b5cf6', emoji: '⚡', grad: 'linear-gradient(135deg,#1e1b4b,#0f172a)',
  },
  {
    id: 18, name: 'Hanging Leg Raise', group: 'core', level: 'ปานกลาง', equip: 'บาร์โหน',
    muscle: 'หน้าท้องล่าง, Hip Flexors',
    desc: 'ท่าที่ยากแต่ผลดีมาก ช่วยพัฒนา lower abs ที่คนส่วนใหญ่ขาดในโปรแกรม',
    sets: [{label:'Set 1-4',val:'4 × 10-15'},{label:'Toes to bar',val:'3 × Max'}],
    color: '#8b5cf6', emoji: '🦵', grad: 'linear-gradient(135deg,#312e81,#0f172a)',
  },
  // CARDIO
  {
    id: 19, name: 'HIIT Sprint', group: 'cardio', level: 'ยาก', equip: 'ลู่วิ่ง',
    muscle: 'ระบบหัวใจและหลอดเลือด',
    desc: 'วิ่ง interval 20s สปรินต์ 40s พัก ซ้ำ 8-10 รอบ เผาผลาญสูง และ afterburn effect นานถึง 24 ชั่วโมง',
    sets: [{label:'Warm-up',val:'5 นาที เดินเร็ว'},{label:'Sprint',val:'8-10 × 20s sprint / 40s rest'},{label:'Cool down',val:'5 นาที เดิน'}],
    color: '#f43f5e', emoji: '🏃', grad: 'linear-gradient(135deg,#4c0519,#0f172a)',
  },
  {
    id: 20, name: 'Jump Rope', group: 'cardio', level: 'ปานกลาง', equip: 'เชือกกระโดด',
    muscle: 'ระบบหัวใจ, ขา, คอร์',
    desc: 'Cardio ที่คุ้มค่าที่สุด ทำได้ทุกที่ ช่วยพัฒนาความคล่องตัว จังหวะ และ endurance',
    sets: [{label:'Round 1-5',val:'5 × 3 นาที'},{label:'Double under',val:'3 × 50 reps'}],
    color: '#f43f5e', emoji: '🪢', grad: 'linear-gradient(135deg,#881337,#0f172a)',
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
        ${makeExerciseSVG(ex)}
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
  const svgs = {
    chest: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="28" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <rect x="28" y="42" width="54" height="36" rx="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <ellipse cx="43" cy="58" rx="10" ry="7" fill="${ex.color}" opacity="0.6"/>
      <ellipse cx="67" cy="58" rx="10" ry="7" fill="${ex.color}" opacity="0.6"/>
      <path d="M28 50 Q10 52 4 62" stroke="rgba(255,255,255,0.5)" stroke-width="9" stroke-linecap="round"/>
      <path d="M82 50 Q100 52 106 62" stroke="rgba(255,255,255,0.5)" stroke-width="9" stroke-linecap="round"/>
      <rect x="0" y="58" width="8" height="8" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="102" y="58" width="8" height="8" rx="2" fill="rgba(255,255,255,0.3)"/>
      <text x="55" y="100" text-anchor="middle" font-size="24">${ex.emoji}</text>
    </svg>`,
    back: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="22" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M38 36 Q25 55 28 76 Q55 85 82 76 Q85 55 72 36Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <path d="M38 36 Q28 55 30 72" stroke="${ex.color}" stroke-width="3" opacity="0.8"/>
      <path d="M72 36 Q82 55 80 72" stroke="${ex.color}" stroke-width="3" opacity="0.8"/>
      <ellipse cx="55" cy="55" rx="12" ry="18" fill="${ex.color}" opacity="0.35"/>
      <line x1="46" y1="44" x2="64" y2="44" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="42" y1="53" x2="68" y2="53" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="44" y1="62" x2="66" y2="62" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <text x="55" y="100" text-anchor="middle" font-size="24">${ex.emoji}</text>
    </svg>`,
    legs: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="18" r="11" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <rect x="35" y="30" width="40" height="26" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <path d="M42 56 Q36 74 34 90" stroke="${ex.color}" stroke-width="12" stroke-linecap="round" opacity="0.7"/>
      <path d="M42 56 Q36 74 34 90" stroke="rgba(255,255,255,0.15)" stroke-width="8" stroke-linecap="round"/>
      <path d="M68 56 Q74 74 76 90" stroke="${ex.color}" stroke-width="12" stroke-linecap="round" opacity="0.7"/>
      <path d="M68 56 Q74 74 76 90" stroke="rgba(255,255,255,0.15)" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="32" cy="93" rx="10" ry="5" fill="rgba(255,255,255,0.2)"/>
      <ellipse cx="78" cy="93" rx="10" ry="5" fill="rgba(255,255,255,0.2)"/>
    </svg>`,
    shoulders: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="25" r="13" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <ellipse cx="30" cy="48" rx="16" ry="12" fill="${ex.color}" opacity="0.6" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <ellipse cx="80" cy="48" rx="16" ry="12" fill="${ex.color}" opacity="0.6" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <rect x="38" y="38" width="34" height="38" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
      <path d="M46 38 Q30 36 20 38" stroke="rgba(255,255,255,0.5)" stroke-width="9" stroke-linecap="round"/>
      <path d="M64 38 Q80 36 90 38" stroke="rgba(255,255,255,0.5)" stroke-width="9" stroke-linecap="round"/>
      <text x="55" y="100" text-anchor="middle" font-size="24">${ex.emoji}</text>
    </svg>`,
    arms: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <path d="M30 85 Q24 65 28 45 Q34 28 44 22 Q52 18 55 20" stroke="rgba(255,255,255,0.3)" stroke-width="16" stroke-linecap="round"/>
      <path d="M30 85 Q24 65 28 45 Q34 28 44 22 Q52 18 55 20" stroke="${ex.color}" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
      <path d="M80 85 Q86 65 82 45 Q76 28 66 22 Q58 18 55 20" stroke="rgba(255,255,255,0.3)" stroke-width="16" stroke-linecap="round"/>
      <path d="M80 85 Q86 65 82 45 Q76 28 66 22 Q58 18 55 20" stroke="${ex.color}" stroke-width="10" stroke-linecap="round" opacity="0.5"/>
      <circle cx="55" cy="20" r="10" fill="${ex.color}" opacity="0.8"/>
      <text x="55" y="105" text-anchor="middle" font-size="20">${ex.emoji}</text>
    </svg>`,
    core: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="20" r="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <rect x="38" y="32" width="34" height="48" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
      <rect x="43" y="38" width="9" height="8" rx="2" fill="${ex.color}" opacity="0.7"/>
      <rect x="58" y="38" width="9" height="8" rx="2" fill="${ex.color}" opacity="0.7"/>
      <rect x="43" y="50" width="9" height="7" rx="2" fill="${ex.color}" opacity="0.55"/>
      <rect x="58" y="50" width="9" height="7" rx="2" fill="${ex.color}" opacity="0.55"/>
      <rect x="43" y="61" width="9" height="7" rx="2" fill="${ex.color}" opacity="0.4"/>
      <rect x="58" y="61" width="9" height="7" rx="2" fill="${ex.color}" opacity="0.4"/>
      <text x="55" y="102" text-anchor="middle" font-size="20">${ex.emoji}</text>
    </svg>`,
    cardio: `<svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="20" r="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M46 32 Q36 48 30 58" stroke="rgba(255,255,255,0.3)" stroke-width="12" stroke-linecap="round"/>
      <path d="M64 32 Q74 48 80 58" stroke="rgba(255,255,255,0.2)" stroke-width="11" stroke-linecap="round"/>
      <path d="M38 50 Q30 65 32 80" stroke="${ex.color}" stroke-width="12" stroke-linecap="round" opacity="0.8"/>
      <path d="M72 50 Q80 65 78 80" stroke="${ex.color}" stroke-width="10" stroke-linecap="round" opacity="0.6"/>
      <path d="M8 70 Q30 68 50 72 Q70 76 92 70 Q100 68 106 72" stroke="${ex.color}" stroke-width="2" opacity="0.5" stroke-dasharray="4 3"/>
      <text x="55" y="106" text-anchor="middle" font-size="22">${ex.emoji}</text>
    </svg>`,
  };
  return svgs[ex.group] || `<div style="font-size:3rem">${ex.emoji}</div>`;
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
  document.getElementById('modalArt').style.background = ex.grad;
  document.getElementById('modalArt').innerHTML = makeExerciseSVG(ex);
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
