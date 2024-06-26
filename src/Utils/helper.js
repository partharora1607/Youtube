var nameList = [
  { name: "Aarav", image: "https://picsum.photos/200?random=1" },
  { name: "Aaradhya", image: "https://picsum.photos/200?random=2" },
  { name: "Advika", image: "https://picsum.photos/200?random=3" },
  { name: "Advait", image: "https://picsum.photos/200?random=4" },
  { name: "Alisha", image: "https://picsum.photos/200?random=5" },
  { name: "Anaya", image: "https://picsum.photos/200?random=6" },
  { name: "Aryan", image: "https://picsum.photos/200?random=7" },
  { name: "Avni", image: "https://picsum.photos/200?random=8" },
  { name: "Ayush", image: "https://picsum.photos/200?random=9" },
  { name: "Dia", image: "https://picsum.photos/200?random=10" },
  { name: "Ishaan", image: "https://picsum.photos/200?random=11" },
  { name: "Ishika", image: "https://picsum.photos/200?random=12" },
  { name: "Kabir", image: "https://picsum.photos/200?random=13" },
  { name: "Kavya", image: "https://picsum.photos/200?random=14" },
  { name: "Kiara", image: "https://picsum.photos/200?random=15" },
  { name: "Krish", image: "https://picsum.photos/200?random=16" },
  { name: "Mahi", image: "https://picsum.photos/200?random=17" },
  { name: "Manan", image: "https://picsum.photos/200?random=18" },
  { name: "Meera", image: "https://picsum.photos/200?random=19" },
  { name: "Neha", image: "https://picsum.photos/200?random=20" },
  { name: "Pranav", image: "https://picsum.photos/200?random=21" },
  { name: "Rhea", image: "https://picsum.photos/200?random=22" },
  { name: "Rishabh", image: "https://picsum.photos/200?random=23" },
  { name: "Riya", image: "https://picsum.photos/200?random=24" },
  { name: "Rohan", image: "https://picsum.photos/200?random=25" },
  { name: "Saisha", image: "https://picsum.photos/200?random=26" },
  { name: "Samar", image: "https://picsum.photos/200?random=27" },
  { name: "Samaira", image: "https://picsum.photos/200?random=28" },
  { name: "Sanvi", image: "https://picsum.photos/200?random=29" },
  { name: "Shaurya", image: "https://picsum.photos/200?random=30" },
  { name: "Siya", image: "https://picsum.photos/200?random=31" },
  { name: "Soham", image: "https://picsum.photos/200?random=32" },
  { name: "Tanvi", image: "https://picsum.photos/200?random=33" },
  { name: "Veer", image: "https://picsum.photos/200?random=34" },
  { name: "Vivaan", image: "https://picsum.photos/200?random=35" },
  { name: "Zara", image: "https://picsum.photos/200?random=36" },
  { name: "Arjun", image: "https://picsum.photos/200?random=37" },
  { name: "Avantika", image: "https://picsum.photos/200?random=38" },
  { name: "Devansh", image: "https://picsum.photos/200?random=39" },
  { name: "Gauri", image: "https://picsum.photos/200?random=40" },
  { name: "Harsh", image: "https://picsum.photos/200?random=41" },
  { name: "Ishani", image: "https://picsum.photos/200?random=42" },
  { name: "Kriti", image: "https://picsum.photos/200?random=43" },
  { name: "Mihir", image: "https://picsum.photos/200?random=44" },
  { name: "Naina", image: "https://picsum.photos/200?random=45" },
  { name: "Parth", image: "https://picsum.photos/200?random=46" },
  { name: "Pihu", image: "https://picsum.photos/200?random=47" },
  { name: "Rahul", image: "https://picsum.photos/200?random=48" },
  { name: "Shreya", image: "https://picsum.photos/200?random=49" },
  { name: "Siddharth", image: "https://picsum.photos/200?random=50" },
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
