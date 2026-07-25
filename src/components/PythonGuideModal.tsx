import React, { useState } from 'react';
import { X, BookOpen, Search, Check, HelpCircle } from 'lucide-react';

interface GuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const GUIDE_SECTIONS = [
  {
    id: 'basics',
    title: '1. Variables & Output',
    content: `Variables store values using the single equals sign (=).

• Syntax: variable_name = value
• Example: name = "Guna"
• Output: print(name) displays the value to the screen.
• Comments: Start lines with # to add notes that Python ignores.`,
    code: `name = "Guna"
age = 25
print("Hello", name) # Output: Hello Guna`,
  },
  {
    id: 'numbers',
    title: '2. Numbers & Operators',
    content: `Python supports integers (whole numbers) and floats (decimals).

• Addition: +
• Subtraction: -
• Multiplication: *
• Division (float): / (e.g. 7/2 -> 3.5)
• Floor Division (int): // (e.g. 7//2 -> 3)
• Modulo (remainder): % (e.g. 7%2 -> 1)
• Exponentiation: ** (e.g. 2**3 -> 8)`,
    code: `x = 7 // 2   # 3
y = 7 % 2    # 1
z = 2 ** 3   # 8`,
  },
  {
    id: 'strings',
    title: '3. Strings & Slicing',
    content: `Strings are sequences of characters inside single or double quotes.

• Length: len(text)
• Upper/Lower: text.upper(), text.lower()
• Strip: text.strip() removes surrounding spaces
• Indexing: text[0] gets the first character
• Slicing: text[start:end] extracts a substring`,
    code: `word = "Bhutan"
print(word[0])    # 'B'
print(word[0:3])  # 'Bhu'
print(word[-1])   # 'n' (last character)`,
  },
  {
    id: 'structures',
    title: '4. Lists, Tuples & Dicts',
    content: `Data structures hold collections of items:

• List [1, 2, 3]: Ordered, mutable (changeable). Use .append(), .pop(), .remove().
• Tuple (1, 2, 3): Ordered, immutable (cannot be changed).
• Set {1, 2, 3}: Unordered, unique elements (no duplicates).
• Dict {"key": "value"}: Key-value pairs. Access with d["key"] or d.get("key").`,
    code: `fruits = ["apple", "banana"]
fruits.append("mango")

user = {"name": "Guna", "age": 25}
print(user["name"]) # "Guna"`,
  },
  {
    id: 'control',
    title: '5. If Statements & Loops',
    content: `Control the execution flow of your script:

• If/Elif/Else: Check boolean conditions.
• For Loop: Iterate over a list, range, or string.
• While Loop: Repeat as long as condition is True.
• Indentation: Indent 4 spaces inside blocks!`,
    code: `score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")

for i in range(3):
    print(i) # 0, 1, 2`,
  },
  {
    id: 'functions',
    title: '6. Functions',
    content: `Reuse code blocks with functions:

• Syntax: def function_name(param1, param2):
• Return: Use return to send output back.
• Default return: If no return statement is used, returns None.`,
    code: `def add(a, b):
    return a + b

total = add(5, 10) # 15`,
  },
  {
    id: 'errors',
    title: '7. Common Python Errors & Fixes',
    content: `When Python encounters a problem, it tells you what went wrong. Don't panic!

• SyntaxError: Missing parenthesis, quote, or colon. Check line endings!
• IndentationError: Forgetting to indent code blocks inside if, for, def, or try.
• TypeError: Mixing incompatible types (e.g. "age: " + 25 instead of str(25)).
• ValueError: Converting invalid string to number (e.g. int("hello")).
• KeyError: Accessing a key that doesn't exist in a dict. Use .get() instead!
• IndexError: Requesting an index outside a list's range (e.g. lst[10] when length is 3).
• NameError: Using a variable name before creating it or misspelling it.
• ZeroDivisionError: Dividing any number by 0 (e.g. 10 / 0).`,
    code: `# Fixing TypeError:
age = 25
print("Age is " + str(age))

# Fixing KeyError:
user = {"name": "Guna"}
print(user.get("age", 0)) # Returns 0 safely!`,
  },
  {
    id: 'analogies',
    title: '8. Bhutanese Concept Map',
    content: `Relate Python concepts to everyday life in the Kingdom of Bhutan:

• Variable = Bamboo Container (Bangchung) labeled with a name.
• String = Sacred text woven on a Prayer Flag (immutable syllable sequence).
• List = Ordered basket of market goods from Thimphu Sunday Market.
• Tuple = Sacred mantra carved into a stone at Bumthang monastery.
• Set = Collection of unique river pebbles from Wang Chhu (no duplicates).
• Dictionary = Dzong Archive where every scroll key reveals a specific record.
• Function = Reusable architectural blueprint used by master builders.`,
    code: `# Storing Bhutanese treasures:
village = "Paro" # Variable
market_basket = ["chili", "cheese", "rice"] # List
coords = (27.5, 89.6) # Tuple
dzong = {"name": "Punakha Dzong", "year": 1637} # Dict`,
  },
];

export const PythonGuideModal: React.FC<GuideProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredSections = GUIDE_SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              Beginner's Python Reference Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-3 bg-slate-100/70 border-b border-slate-200">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search concepts, operators, methods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 focus:border-indigo-500 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-800 outline-none transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Content list */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/50">
          {filteredSections.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              No matching topic found for "{searchTerm}"
            </div>
          ) : (
            filteredSections.map((sec) => (
              <div
                key={sec.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col gap-3"
              >
                <h4 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-2">
                  {sec.title}
                </h4>
                <div className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap font-normal">
                  {sec.content}
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 font-mono text-xs text-amber-300 whitespace-pre-wrap shadow-inner">
                  {sec.code}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
