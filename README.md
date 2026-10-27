# South Indian Temple Luxury Digital Griha Pravesha Invitation

A mobile-first, single-page **Digital Housewarming (Griha Pravesha) Invitation** web application inspired by South Indian temple architecture and luxury aesthetics. Built with **React 18 + Vite**, **Tailwind CSS v3**, **Framer Motion**, and **Lucide Icons**.

---

## 🏛️ Screen & Animation Flow

1. **Stage 1: Door Splash (Full screen, scroll-locked)**
   - Carved teak double door with mango-leaf, marigold, and jasmine garlands.
   - Banana plants on both sides and two brass *kuthuvilakku* lamps with glowing animated flickering flames.
   - Idle slow camera push-in on the entrance door.
   - Top-right semi-transparent **"SKIP"** pill jumping straight to the invitation.
   - Top sound toggle and center translucent circular play/pause button.
   - `|| Shubhamastu ||` in Cinzel gold, followed by the pulsing **"TOUCH THE DOOR"** button with tap-hand icon.

2. **Stage 2: Kumkum Footprints + Door Opening (Signature Moment)**
   - Upon tap (which safely starts background devotional music with the user gesture):
     - The camera slides down to the threshold floor.
     - 26 white jasmine flowers fall slowly with natural drift and rotation, landing gently on the floor.
     - 7 sacred red *kumkum* footprints appear sequentially in an S-curved path heading toward the door (350ms apart), each scaling in with a golden sparkle and glowing red pulse ring.
     - As footprints reach the threshold, the two door panels swing open inward in 3D (`perspective: 1200px`, `rotateY` from hinges over 1.8s) with warm golden light spilling through the doorway.

3. **Stage 3: Ganesha Pooja Alcove (Full screen, scroll unlocked)**
   - Carved wooden arch, glowing golden **ॐ**, flower garlands, and a sacred Lord Ganesha idol with soft floating ember particles.
   - Bottom fade to black with `|| Shubhamastu ||`, large two-line Cinzel gold-gradient `GRIHA PRAVESHA` heading, taglines, date tag (`11TH NOVEMBER '26 · BANGALORE`), and a bouncing chevron scroll hint.

4. **Stage 4: Illustrated Couple Hero**
   - Full-width illustrated portrait of the couple in traditional South Indian attire (man in white shirt + veshti with gold border, woman in ivory-and-gold silk saree) with hands in namaste at the pooja entrance.
   - Features scroll-linked parallax scaling (`useScroll` + `useTransform`) and a soft fade into the cream paper background.

5. **Stage 5: Invitation Section (Cream paper texture)**
   - **Sticky Header**: Left `RAMYA & RISHI` (Cinzel, maroon), right bordered music mute/unmute toggle.
   - Couple names in large **Great Vibes** script (*Ramya & Rishi*) and Cormorant Garamond invitation message.
   - **Auspicious Program Vertical Timeline**:
     - Central vertical line with gold and *kumkum*-red tint.
     - Red lotus nodes at each program ritual.
     - Circular gold-ring medallions on the left with custom South Indian sacred illustrations:
       1. **Punyahavachanam** (Kalasam with coconut and mango leaves) - 09:15 AM
       2. **Griha Pravesham** (Teak temple door) - 10:00 AM
       3. **Ganapathi Homam** (Golden Ganesha & sacred fire) - 10:45 AM
       4. **Satyanarayana Puja** (Brass diya lamp) - 11:30 AM
       5. **Lunch & Blessings** (South Indian banana leaf feast) - Followed by lunch

6. **Stage 6: Event Details**
   - Dark wood-brown band wrapping a rounded cream card with thin gold border.
   - 2x2 grid with thin gold Lucide icons:
     - **DATE**: 11th November 2026
     - **TIME**: 10:00 AM, followed by lunch
     - **VENUE**: 104, HSR Layout, Bangalore
     - **BLESSINGS ONLY**: Your blessings are our greatest gift
   - Outlined gold pill **"DIRECTIONS"** button opening Google Maps.

7. **Stage 7: Footer (Cream)**
   - Red-lotus ornamental divider.
   - Closing message: *"May our new home be filled with happiness, health, prosperity and divine blessings today and always."*
   - Couple names in script and **"Add to Calendar (.ics)"** download button.

---

## 🛠️ How to Edit [src/data/invite.js](file:///d:/Natal%20Nine%20IT%20Solutions/Works/NEW%20UI/src/data/invite.js)

All content lives in ONE single configuration file so you can easily customize it for other families:

```javascript
// src/data/invite.js
export const inviteData = {
  coupleNames: "Ramya & Rishi",
  displayNames: "Ramya & Rishi",
  subTitle: "Together with their parents & families",
  tagline: "A New Home, A New Beginning.",
  subTagline: "Blessed with Love & Happiness.",
  closingMessage: "May our new home be filled with happiness, health, prosperity and divine blessings today and always.",
  
  event: {
    dateDisplay: "11th November 2026",
    dateShort: "11TH NOVEMBER '26",
    timeDisplay: "10:00 AM",
    timeSubtitle: "Followed by lunch",
    city: "BANGALORE",
    venueName: "104, HSR Layout, Bangalore",
    venueAddress: "Sector 2, HSR Layout, Bangalore, Karnataka - 560102",
    mapLink: "https://maps.google.com/?q=HSR+Layout+Bangalore",
    blessingsOnlyNote: "Your blessings are our greatest gift",
    calendarEvent: { ... }
  },

  program: [
    { id: "punyahavachanam", title: "PUNYAHAVACHANAM", time: "09:15 AM", iconType: "kalasam", note: "..." },
    { id: "griha-pravesham", title: "GRIHA PRAVESHAM", time: "10:00 AM", iconType: "door", note: "..." },
    { id: "ganapathi-homam", title: "GANAPATHI HOMAM", time: "10:45 AM", iconType: "ganesha", note: "..." },
    { id: "satyanarayana-puja", title: "SATYANARAYANA PUJA", time: "11:30 AM", iconType: "lamp", note: "..." },
    { id: "lunch-blessings", title: "LUNCH & BLESSINGS", time: "Followed by lunch", iconType: "meal", note: "..." }
  ],

  music: {
    audioUrl: "...", // Background music stream or /assets/aarti.mp3
  },

  images: {
    door: "...",        // Placeholders in /public/assets/door.jpg
    floor: "...",       // /public/assets/floor.jpg
    ganeshaAlcove: "...",
    coupleFull: "...",  // /public/assets/couple-full.jpg
  }
};
```

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` (or port printed in terminal) in your browser. Switch DevTools to mobile device view (e.g. 390x844).
3. **Build Production Bundle**:
   ```bash
   npm run build
   ```
