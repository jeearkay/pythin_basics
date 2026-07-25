import { Level } from '../types';

export const LEVELS: Level[] = [
  // LEVEL 1: Basics & Print
  {
    name: 'The First Step',
    title: 'Basics & Print',
    location: 'Paro Airport Gateway',
    icon: '1',
    badge: 'First Spark',
    badgeIcon: '🌟',
    story: 'Every journey begins with a single step. At the Paro Airport gateway, Guna learns the most fundamental spells of Python: displaying messages to the world with print() and storing knowledge in variables.',
    theory: [
      {
        type: 'text',
        content: `<div class="space-y-3 text-slate-700">
          <p class="text-sm font-medium text-slate-800">Welcome to Python! Programming is giving step-by-step instructions to a computer. Let's learn our first two sacred spells:</p>
          
          <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-2xs">
            <strong class="text-indigo-900 font-bold text-sm block mb-1">📢 1. The print() Function</strong>
            <p class="text-xs text-indigo-950 leading-relaxed mb-2"><code>print()</code> displays text or numbers on the output screen. Enclose text inside quotes like <code>"Kuzu Zangpo La"</code> (a String).</p>
            <div class="bg-slate-900 text-slate-100 p-2.5 rounded-xl font-mono text-xs">print("Kuzu Zangpo La") # Output: Kuzu Zangpo La</div>
          </div>

          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl shadow-2xs">
            <strong class="text-amber-900 font-bold text-sm block mb-1">🧺 2. Variables (Bhutanese Analogy)</strong>
            <p class="text-xs text-amber-950 leading-relaxed mb-2">Think of a <strong>variable</strong> as a traditional woven bamboo container (<em>Bangchung</em>) labelled with a name. You put data inside using the single equals sign <code>=</code>.</p>
            <div class="bg-slate-900 text-slate-100 p-2.5 rounded-xl font-mono text-xs">village = "Paro"\nprint(village) # Output: Paro</div>
          </div>

          <div class="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl shadow-2xs">
            <strong class="text-rose-900 font-bold text-sm block mb-1">⚠️ Beginner Trap to Avoid</strong>
            <p class="text-xs text-rose-950 leading-relaxed">In Python 3, <code>print</code> MUST have parentheses <code>()</code>. Writing <code>print "Hello"</code> causes a <strong>SyntaxError</strong>!</p>
          </div>
        </div>`,
      },
    ],
    cheats: [
      { m: 'print(x)', d: 'Display output or variable' },
      { m: '# comment', d: 'Write a non-executing note' },
      { m: 'x = 10', d: 'Assign a value to a variable' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Language of Code',
        prompt: 'Which of the following is a valid Python comment?',
        options: ['// This is a comment', '# This is a comment', '/* This is a comment */', '<!-- This is a comment -->'],
        answer: 1,
        explanation: 'In Python, comments start with a hash symbol # and are ignored during execution.',
      },
      {
        type: 'fill',
        title: 'The First Spell',
        prompt: 'Fill in the blank to print the text "Hello".',
        codeBefore: '___("Hello")',
        codeAfter: '',
        answer: 'print',
        hints: ["It's the built-in function used to display output."],
        explanation: 'print() is Python\'s built-in function to display text or values.',
      },
      {
        type: 'match',
        title: "The Translator's Gaze",
        prompt: 'Match each Python expression to its expected output.',
        left: ['print("Druk")', 'x = 5; print(x)', 'print(2 + 3)', '# print("hidden")'],
        right: ['Druk', '5', '5', '(no output)'],
        explanation: 'Strings print without outer quotes, numbers print as calculated, and commented lines do not run.',
      },
      {
        type: 'sort',
        title: 'Functions vs Comments',
        prompt: 'Drag each code snippet into its correct category.',
        categories: [
          { label: 'func', tag: 'Function' },
          { label: 'comment', tag: 'Comment' },
        ],
        items: [
          { v: 'print()', c: 'func' },
          { v: '# hello', c: 'comment' },
          { v: 'len()', c: 'func' },
          { v: '# note', c: 'comment' },
        ],
        explanation: 'Functions end with parentheses (), while comments start with #.',
      },
      {
      type: 'sandbox',
      title: 'The First Output',
      prompt: 'Use <code>print()</code> to display the exact greeting: <code>Kuzu Zangpo La</code>',
      context: '# Your code below:',
      starter: 'print("Kuzu Zangpo La")',
      hints: ['Enclose the text in quotes inside print(...).'],
      checkOutput: '',
      fallbackCheck: (code) => /print\s*\(\s*["']Kuzu Zangpo La["']\s*\)/.test(code),
      successOut: '>>> Kuzu Zangpo La',
      failOut: 'Output did not match "Kuzu Zangpo La"',
      explanation: 'print("Kuzu Zangpo La") outputs the exact string to stdout.',
      },
      {
        type: 'mcq',
        title: 'The Storage Basket',
        prompt: 'What is the correct way to assign the integer value 10 to a variable named <code>x</code>?',
        options: ['x == 10', '10 = x', 'x = 10', 'x: 10'],
        answer: 2,
        explanation: 'A single equals sign = assigns the value on the right to the variable name on the left.',
      },
      {
        type: 'fill',
        title: 'Variable Assignment',
        prompt: 'Fill in the operator to assign "Guna" to the variable <code>name</code>.',
        codeBefore: 'name ___ "Guna"',
        codeAfter: '',
        answer: '=',
        hints: ['Use the single assignment operator.'],
        explanation: '= is the assignment operator in Python.',
      },
      {
        type: 'sandbox',
        title: 'Print the Variable',
        prompt: 'Create a variable <code>village</code> with value <code>"Paro"</code> and print it.',
        context: '# Your code below:',
        starter: 'village = "Paro"\nprint(village)',
        hints: ['Assign the string "Paro" to village, then call print(village).'],
        checkOutput: '',
        fallbackCheck: (code) => /village\s*=\s*["']Paro["']/.test(code) && /print\s*\(\s*village\s*\)/.test(code),
        successOut: '>>> Paro',
        failOut: 'Expected output "Paro"',
        explanation: 'village = "Paro" creates the variable, and print(village) prints its stored value.',
      },
      {
        type: 'debug',
        title: 'The Missing Parenthesis',
        prompt: 'Guna forgot Python 3 syntax for print. Identify the line with the syntax error.',
        code: ['message = "Hello"', 'print message', 'print("Done")'],
        errorLine: 1,
        explanation: 'SyntaxError: In Python 3, print is a function and requires parentheses around arguments.',
        options: ['Add parentheses: print(message)', 'Add a colon at the end', 'Remove quotes from "Hello"', 'Change to print = message'],
      },
      {
        type: 'mcq',
        title: 'The Combine',
        prompt: 'What does <code>print("Hello " + "World")</code> display?',
        options: ['Hello World', 'HelloWorld', '"Hello World"', 'Error'],
        answer: 0,
        explanation: 'Concatenating "Hello " and "World" joins the two strings together, preserving the space after Hello.',
      },
    ],
  },

  // LEVEL 2: Numbers
  {
    name: 'Numbers',
    title: 'The Mountain Count',
    location: "Tiger's Nest Monastery",
    icon: '2',
    badge: 'Number Sage',
    badgeIcon: '⛰',
    story: "High above the Paro valley, the Tiger's Nest clings to the cliff. Here, monks count prayer beads with absolute precision — every integer sacred, every fraction meaningful.",
    theory: [
      {
        type: 'text',
        content: `<div class="space-y-3 text-slate-700">
          <p class="text-sm font-medium text-slate-800">At the Tiger's Nest Monastery, counting prayer beads requires absolute numerical precision. Python handles numbers with two main data types:</p>

          <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-2xs">
            <strong class="text-indigo-900 font-bold text-sm block mb-1">🔢 Integers vs Floats</strong>
            <p class="text-xs text-indigo-950 leading-relaxed"><strong>Integers (int)</strong> are whole numbers without decimals (e.g. <code>42</code>, <code>-5</code>). <strong>Floats (float)</strong> are numbers with decimal points (e.g. <code>3.14</code>, <code>0.5</code>).</p>
          </div>

          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-2xs">
            <strong class="text-emerald-900 font-bold text-sm block mb-1">⚡ Essential Math Operators</strong>
            <ul class="text-xs text-emerald-950 space-y-1 list-disc pl-4 leading-relaxed">
              <li><code>+</code>, <code>-</code>, <code>*</code>: Standard Addition, Subtraction, Multiplication</li>
              <li><code>/</code>: Float Division &rarr; <code>7 / 2</code> gives <code>3.5</code></li>
              <li><code>//</code>: Floor Division (rounds down) &rarr; <code>7 // 2</code> gives <code>3</code></li>
              <li><code>%</code>: Modulo (remainder) &rarr; <code>7 % 2</code> gives <code>1</code></li>
              <li><code>**</code>: Exponentiation &rarr; <code>2 ** 3</code> gives <code>8</code></li>
            </ul>
          </div>

          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl shadow-2xs">
            <strong class="text-amber-900 font-bold text-sm block mb-1">🏔 Bhutanese Analogy: Counting Prayer Beads</strong>
            <p class="text-xs text-amber-950 leading-relaxed">Counting full beads on a Mala string uses <strong>integers</strong>. Measuring portioned yak butter tea by volume uses <strong>floats</strong>!</p>
          </div>
        </div>`,
      },
    ],
    cheats: [
      { m: 'int(x)', d: 'Convert value to integer' },
      { m: 'float(x)', d: 'Convert value to floating-point' },
      { m: 'round(x, n)', d: 'Round number x to n decimal places' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Sacred Counts',
        prompt: 'What is the result of <code>7 // 2</code> (floor division) in Python?',
        options: ['3.5', '3', '4', '2'],
        answer: 1,
        explanation: 'Floor division // divides two numbers and truncates (rounds down) to the nearest integer, so 7 // 2 is 3.',
      },
      {
        type: 'sort',
        title: 'Sort the Stones',
        prompt: 'Drag each value into its correct numeric type: Integer or Float.',
        categories: [
          { label: 'int', tag: 'Integer' },
          { label: 'float', tag: 'Float' },
        ],
        items: [
          { v: '42', c: 'int' },
          { v: '3.14', c: 'float' },
          { v: '-5', c: 'int' },
          { v: '0.5', c: 'float' },
        ],
        explanation: 'Whole numbers are ints; numbers with decimal points are floats.',
      },
      {
        type: 'fill',
        title: 'The Absolute Truth',
        prompt: 'Fill in the function name to get the absolute value of -10.',
        codeBefore: 'result = ___(-10)',
        codeAfter: '',
        answer: 'abs',
        hints: ['Use the built-in function for absolute distance from zero.'],
        explanation: 'abs() returns the absolute magnitude of a number without its sign.',
      },
      {
        type: 'match',
        title: 'Match the Number Spells',
        prompt: 'Match each numeric expression to its evaluated output.',
        left: ['abs(-7)', 'round(3.7)', 'int(3.9)', 'float(5)'],
        right: ['7', '4', '3', '5.0'],
        explanation: 'abs(-7) is 7, round(3.7) rounds up to 4, int(3.9) truncates to 3, and float(5) converts to 5.0.',
      },
      {
        type: 'sandbox',
        title: 'Round the Offering',
        prompt: 'Given <code>price = 4.567</code>, round it to <strong>2 decimal places</strong> and assign to <code>offering</code>.',
        context: 'price = 4.567\n# Your code below:',
        starter: 'offering = round(price, 2)',
        hints: ['Use round(number, decimals).'],
        testCode: '\nassert "offering" in globals()\nassert offering == 4.57',
        fallbackCheck: (code) => /offering\s*=\s*round\s*\(\s*price\s*,\s*2\s*\)/.test(code),
        successOut: '>>> offering\n4.57',
        failOut: 'Expected offering to equal 4.57',
        explanation: 'round(4.567, 2) rounds to 2 decimal places, yielding 4.57.',
      },
      {
        type: 'mcq',
        title: 'The Remainder',
        prompt: 'What does the modulo operator <code>%</code> calculate?',
        options: ['Division', 'Exponentiation', 'Returns the remainder of division', 'Floor division'],
        answer: 2,
        explanation: 'The % operator returns the remainder after division (e.g. 7 % 3 is 1).',
      },
      {
        type: 'fill',
        title: 'String to Integer',
        prompt: 'Fill in the constructor to convert the string "5" into an integer.',
        codeBefore: 'num = ___("5")',
        codeAfter: '',
        answer: 'int',
        hints: ['Use the built-in int type converter.'],
        explanation: 'int("5") converts string "5" into integer 5.',
      },
      {
        type: 'match',
        title: 'Operator Meanings',
        prompt: 'Match each arithmetic operator to its description.',
        left: ['//', '%', '**', '/'],
        right: ['Floor division', 'Modulo (remainder)', 'Exponent', 'True division'],
        explanation: '// is floor division, % is remainder, ** is exponentiation, and / is standard decimal division.',
      },
      {
        type: 'sandbox',
        title: 'Calculate Total Price',
        prompt: 'Add <code>a = 10</code> and <code>b = 15.5</code> and assign the result to <code>total</code>.',
        context: 'a = 10\nb = 15.5\n# Your code below:',
        starter: 'total = a + b',
        hints: ['Use total = a + b.'],
        testCode: '\nassert "total" in globals()\nassert total == 25.5',
        fallbackCheck: (code) => /total\s*=\s*a\s*\+\s*b/.test(code) || /total\s*=\s*10\s*\+\s*15\.5/.test(code),
        successOut: '>>> total\n25.5',
        failOut: 'Expected total to equal 25.5',
        explanation: 'Adding int 10 and float 15.5 results in float 25.5.',
      },
      {
        type: 'debug',
        title: 'The Broken Mantra',
        prompt: 'Guna tried to concatenate a string and integer directly. Find the broken line.',
        code: ['count = 5', 'message = "I have " + count + " apples"', 'print(message)'],
        errorLine: 1,
        explanation: 'TypeError: Cannot concatenate str and int directly. Convert int to string using str(count).',
        options: ['Convert count with str(count)', 'Use // instead of +', 'Remove print statement', 'Add a comma inside quotes'],
      },
    ],
  },

  // LEVEL 3: Strings
  {
    name: 'Strings',
    title: 'Prayer Flag Whispers',
    location: 'Chele La Prayer Fields',
    icon: '3',
    badge: 'Word Weaver',
    badgeIcon: '🜂',
    story: "On the windswept pass of Chele La, prayer flags carry sacred syllables across the Himalayas. Each flag is a string — immutable in essence, yet transformed by the wind's methods.",
    theory: [
      {
        type: 'text',
        content: `<div class="space-y-3 text-slate-700">
          <p class="text-sm font-medium text-slate-800">On Chele La pass, prayer flags carry written syllables across mountain winds. In Python, text sequences are called <strong>Strings (str)</strong>.</p>

          <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-2xs">
            <strong class="text-indigo-900 font-bold text-sm block mb-1">🔤 Indexing & Slicing (Zero-Based)</strong>
            <p class="text-xs text-indigo-950 leading-relaxed mb-2">Python starts counting from index 0. Access a character with <code>s[index]</code> or slice a substring with <code>s[start:end]</code>.</p>
            <div class="bg-slate-900 text-slate-100 p-2.5 rounded-xl font-mono text-xs">word = "Bhutan"\nprint(word[0])    # 'B'\nprint(word[0:3])  # 'Bhu'\nprint(word[-1])   # 'n' (last char)</div>
          </div>

          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl shadow-2xs">
            <strong class="text-amber-900 font-bold text-sm block mb-1">📜 Strings are Immutable!</strong>
            <p class="text-xs text-amber-950 leading-relaxed">Once woven, a sacred prayer flag cannot be altered character-by-character. Trying <code>word[0] = "K"</code> raises a <strong>TypeError</strong>! You must construct a new string.</p>
          </div>

          <div class="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl shadow-2xs">
            <strong class="text-sky-900 font-bold text-sm block mb-1">🛠 Useful String Methods</strong>
            <p class="text-xs text-sky-950 leading-relaxed"><code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code> (trims whitespace), <code>.replace(old, new)</code>, and <code>len(s)</code> (character length).</p>
          </div>
        </div>`,
      },
    ],
    cheats: [
      { m: '.upper()', d: 'Convert string to uppercase' },
      { m: '.strip()', d: 'Remove leading & trailing whitespace' },
      { m: 'len(s)', d: 'Return total character count' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Immutable Flag',
        prompt: 'What happens if you execute: <code>name = "Guna"; name[0] = "K"</code>?',
        options: ['Changes name to "Kuna"', 'Raises a TypeError', 'Raises a SyntaxError', 'Creates a new string automatically'],
        answer: 1,
        explanation: 'Python strings are immutable, so item assignment (name[0] = "K") raises a TypeError.',
      },
      {
        type: 'fill',
        title: 'Raise the Flag',
        prompt: 'Fill in the method to convert "bhutan" to uppercase "BHUTAN".',
        codeBefore: 'word = "bhutan"\nflag = word.___()',
        codeAfter: '',
        answer: 'upper',
        hints: ['Use the method that converts text to capital letters.'],
        explanation: '.upper() returns a new string in all uppercase.',
      },
      {
        type: 'match',
        title: "The Wind's Methods",
        prompt: 'Match each string method call to its result.',
        left: ['"Hello".upper()', '"  hi  ".strip()', '"a,b,c".split(",")', 'len("Druk")'],
        right: ['"HELLO"', '"hi"', '["a","b","c"]', '4'],
        explanation: '.upper() capitalizes, .strip() trims whitespace, .split(",") splits into list, len() counts chars.',
      },
      {
        type: 'sort',
        title: 'String or Not?',
        prompt: 'Classify each item as a String or Non-String value.',
        categories: [
          { label: 'str', tag: 'String' },
          { label: 'not str', tag: 'Other' },
        ],
        items: [
          { v: "'hello'", c: 'str' },
          { v: '"world"', c: 'str' },
          { v: '123', c: 'not str' },
          { v: 'True', c: 'not str' },
        ],
        explanation: 'Single or double quotes denote string literals.',
      },
      {
        type: 'sandbox',
        title: 'Slice the Sky',
        prompt: 'Extract the first 3 letters of <code>word = "Bhutan"</code> using slicing and assign to <code>flag</code>.',
        context: 'word = "Bhutan"\n# Your code below:',
        starter: 'flag = word[0:3]',
        hints: ['Use slice notation word[0:3].'],
        testCode: '\nassert "flag" in globals()\nassert flag == "Bhu"',
        fallbackCheck: (code) => /flag\s*=\s*word\s*\[\s*0?\s*:\s*3\s*\]/.test(code),
        successOut: '>>> flag\n"Bhu"',
        failOut: 'Expected flag to equal "Bhu"',
        explanation: 'word[0:3] slices from index 0 up to (excluding) index 3, yielding "Bhu".',
      },
      {
        type: 'mcq',
        title: 'The Length',
        prompt: 'What does <code>len("Bhutan")</code> return?',
        options: ['5', '6', '7', 'Error'],
        answer: 1,
        explanation: '"Bhutan" has 6 characters, so len() returns 6.',
      },
      {
        type: 'fill',
        title: 'Replace Text',
        prompt: 'Fill in the method name to replace "H" with "K" in "Hello".',
        codeBefore: 'txt = "Hello"\nnew = txt.___("H", "K")',
        codeAfter: '',
        answer: 'replace',
        hints: ['Use the method that replaces substrings.'],
        explanation: '.replace(old, new) swaps target occurrences.',
      },
      {
        type: 'match',
        title: 'Slicing the Sky',
        prompt: 'Match each slice on <code>word = "Bhutan"</code> to its result.',
        left: ['word[0]', 'word[0:3]', 'word[-1]', 'word[1:]'],
        right: ['"B"', '"Bhu"', '"n"', '"hutan"'],
        explanation: 'word[0] is "B", word[0:3] is "Bhu", word[-1] is "n" (last char), and word[1:] is "hutan".',
      },
      {
        type: 'sandbox',
        title: 'Combine the Flags',
        prompt: 'Combine <code>a = "Hello "</code> and <code>b = "Bhutan"</code> into variable <code>msg</code>.',
        context: 'a = "Hello "\nb = "Bhutan"\n# Your code below:',
        starter: 'msg = a + b',
        hints: ['Use the + string concatenation operator.'],
        testCode: '\nassert "msg" in globals()\nassert msg == "Hello Bhutan"',
        fallbackCheck: (code) => /msg\s*=\s*a\s*\+\s*b/.test(code),
        successOut: '>>> msg\n"Hello Bhutan"',
        failOut: 'Expected msg to equal "Hello Bhutan"',
        explanation: 'a + b concatenates "Hello " and "Bhutan" into "Hello Bhutan".',
      },
      {
        type: 'debug',
        title: 'The Unchangeable Syllable',
        prompt: 'Guna tried to mutate a character in place. Identify the erroneous line.',
        code: ['name = "Guna"', 'name[0] = "K"', 'print(name)'],
        errorLine: 1,
        explanation: "TypeError: 'str' object does not support item assignment. Strings are immutable.",
        options: ['Rebuild with slicing: name = "K" + name[1:]', 'Use a tuple instead', 'Use .insert()', 'Enclose in extra quotes'],
      },
    ],
  },

  // LEVEL 4: Booleans
  {
    name: 'Booleans',
    title: "The Druk's Judgment",
    location: 'Punakha Dzong',
    icon: '4',
    badge: 'Truth Seeker',
    badgeIcon: '⚖',
    story: 'At the confluence of two rivers stands Punakha Dzong, where the Thunder Dragon — Druk — judges truth from illusion. In Python, Booleans are the dragon\'s gaze: True or False.',
    theory: [
      {
        type: 'text',
        content: `<div class="space-y-3 text-slate-700">
          <p class="text-sm font-medium text-slate-800">At Punakha Dzong, the Thunder Dragon (Druk) evaluates truth from illusion. In Python, truth is expressed using <strong>Booleans</strong>.</p>

          <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-2xs">
            <strong class="text-indigo-900 font-bold text-sm block mb-1">⚖ True or False</strong>
            <p class="text-xs text-indigo-950 leading-relaxed">A <strong>Boolean (bool)</strong> can only be either <code>True</code> or <code>False</code> (note capital T and F!).</p>
          </div>

          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-2xs">
            <strong class="text-emerald-900 font-bold text-sm block mb-1">🔍 Comparison & Logic Operators</strong>
            <ul class="text-xs text-emerald-950 space-y-1 list-disc pl-4 leading-relaxed">
              <li><code>==</code> (Equal to) vs <code>=</code> (Assignment)</li>
              <li><code>!=</code> (Not equal to), <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
              <li><code>and</code>: True only if BOTH sides are True</li>
              <li><code>or</code>: True if AT LEAST ONE side is True</li>
              <li><code>not</code>: Flips True to False, and False to True</li>
            </ul>
          </div>

          <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl shadow-2xs">
            <strong class="text-amber-900 font-bold text-sm block mb-1">💡 Falsy Values in Python</strong>
            <p class="text-xs text-amber-950 leading-relaxed">Numbers like <code>0</code>, empty strings <code>""</code>, empty lists <code>[]</code>, and <code>None</code> evaluate to <code>False</code> when converted using <code>bool()</code>.</p>
          </div>
        </div>`,
      },
    ],
    cheats: [
      { m: 'True / False', d: 'Boolean literal values' },
      { m: '==, !=, >, <', d: 'Comparison operators' },
      { m: 'and, or, not', d: 'Logical boolean operators' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: "The Dragon's Scale",
        prompt: 'What is the evaluated result of <code>True and False</code>?',
        options: ['True', 'False', 'None', 'Error'],
        answer: 1,
        explanation: 'The "and" operator requires both sides to be True. Since one side is False, the result is False.',
      },
      {
        type: 'fill',
        title: 'The Equality Check',
        prompt: 'Fill in the operator to check if variable <code>x</code> equals 10.',
        codeBefore: 'x = 10\nresult = (x ___ 10)',
        codeAfter: '',
        answer: '==',
        hints: ['Use the double equals operator for comparison.'],
        explanation: '== compares two values for equality.',
      },
      {
        type: 'sort',
        title: 'Truth From Illusion',
        prompt: 'Classify each expression based on its truth value.',
        categories: [
          { label: 'True', tag: 'Truth' },
          { label: 'False', tag: 'Illusion' },
        ],
        items: [
          { v: '5 > 3', c: 'True' },
          { v: '10 == 9', c: 'False' },
          { v: 'not False', c: 'True' },
          { v: '0', c: 'False' },
        ],
        explanation: '5>3 is True, 10==9 is False, not False is True, and 0 is falsy.',
      },
      {
        type: 'match',
        title: 'Logical Operators',
        prompt: 'Match each logical expression to its evaluated boolean.',
        left: ['True and True', 'True or False', 'not True', 'False and False'],
        right: ['True', 'True', 'False', 'False'],
        explanation: 'True and True is True; True or False is True; not True is False; False and False is False.',
      },
      {
        type: 'sandbox',
        title: 'Judge the Offering',
        prompt: 'Given <code>coins = 0</code>, convert it to a boolean using <code>bool()</code> and store in <code>has_wealth</code>.',
        context: 'coins = 0\n# Your code below:',
        starter: 'has_wealth = bool(coins)',
        hints: ['Use bool(coins).'],
        testCode: '\nassert "has_wealth" in globals()\nassert has_wealth == False',
        fallbackCheck: (code) => /has_wealth\s*=\s*bool\s*\(\s*coins\s*\)/.test(code),
        successOut: '>>> has_wealth\nFalse',
        failOut: 'Expected has_wealth to equal False',
        explanation: 'In Python, 0 evaluates to False when converted to bool.',
      },
      {
        type: 'mcq',
        title: 'The Negation',
        prompt: 'What does <code>not (5 > 3)</code> evaluate to?',
        options: ['True', 'False', '5', '3'],
        answer: 1,
        explanation: '5 > 3 is True, so "not True" evaluates to False.',
      },
      {
        type: 'fill',
        title: 'Empty String Boolean',
        prompt: 'Fill in the function to evaluate whether an empty string is truthy or falsy.',
        codeBefore: 'val = ""\nresult = ___(val)',
        codeAfter: '',
        answer: 'bool',
        hints: ['Use the boolean constructor.'],
        explanation: 'bool("") evaluates to False because empty strings are falsy.',
      },
      {
        type: 'match',
        title: 'Comparison Operators',
        prompt: 'Match each operator to its comparison meaning.',
        left: ['==', '!=', '>', '<='],
        right: ['Equal to', 'Not equal to', 'Greater than', 'Less than or equal to'],
        explanation: '== tests equality, != tests inequality, > tests greater than, <= tests less than or equal.',
      },
      {
        type: 'sandbox',
        title: 'The Age Check',
        prompt: 'If <code>age = 20</code>, test if <code>age</code> is greater than or equal to 18. Store the boolean in <code>is_adult</code>.',
        context: 'age = 20\n# Your code below:',
        starter: 'is_adult = age >= 18',
        hints: ['Use age >= 18.'],
        testCode: '\nassert "is_adult" in globals()\nassert is_adult == True',
        fallbackCheck: (code) => /is_adult\s*=\s*age\s*>=\s*18/.test(code),
        successOut: '>>> is_adult\nTrue',
        failOut: 'Expected is_adult to equal True',
        explanation: '20 >= 18 is True.',
      },
      {
        type: 'debug',
        title: 'The Misplaced Scale',
        prompt: 'Guna used a single equals sign in an if condition. Identify the broken line.',
        code: ['x = 5', 'if x = 5:', '    print("equal")'],
        errorLine: 1,
        explanation: 'SyntaxError: = is assignment; use == for equality comparison inside if statements.',
        options: ['Use == for comparison (if x == 5:)', 'Use := instead', 'Remove the if statement', 'Wrap in brackets'],
      },
    ],
  },

  // LEVEL 5: Lists
  {
    name: 'Lists',
    title: 'The Thimphu Market',
    location: 'Thimphu Sunday Market',
    icon: '5',
    badge: 'Market Keeper',
    badgeIcon: '🜍',
    story: 'In bustling Thimphu, vendors arrange chilis, rice, and cheese in ordered baskets — Python lists. Mutable and ordered, these baskets can be added to, removed from, and rearranged.',
    theory: [
      {
        type: 'text',
        content: `<div class="space-y-3 text-slate-700">
          <p class="text-sm font-medium text-slate-800">At Thimphu Sunday Market, vendors place market goods into ordered woven baskets — Python <strong>Lists</strong>.</p>

          <div class="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-2xs">
            <strong class="text-indigo-900 font-bold text-sm block mb-1">🧺 What is a List?</strong>
            <p class="text-xs text-indigo-950 leading-relaxed mb-2">An ordered, <strong>mutable</strong> (changeable) collection surrounded by square brackets <code>[item1, item2]</code>. Elements are zero-indexed.</p>
            <div class="bg-slate-900 text-slate-100 p-2.5 rounded-xl font-mono text-xs">basket = ["rice", "chili", "cheese"]\nprint(basket[0]) # "rice"</div>
          </div>

          <div class="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-2xs">
            <strong class="text-emerald-900 font-bold text-sm block mb-1">🛠 Essential List Methods</strong>
            <ul class="text-xs text-emerald-950 space-y-1 list-disc pl-4 leading-relaxed">
              <li><code>.append(item)</code>: Add a new item to the end of the list</li>
              <li><code>.pop()</code>: Remove and return the last item</li>
              <li><code>.remove(value)</code>: Remove the first occurrence of a specific value</li>
              <li><code>.sort()</code>: Sort items in ascending order in-place</li>
            </ul>
          </div>
        </div>`,
      },
    ],
    cheats: [
      { m: '.append(x)', d: 'Add element x to end of list' },
      { m: '.pop(i)', d: 'Remove and return item at index i' },
      { m: '.remove(x)', d: 'Remove first occurrence of value x' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Market Basket',
        prompt: 'What is the index of the first item in any Python list?',
        options: ['1', '0', '-1', 'First'],
        answer: 1,
        explanation: 'Python uses 0-based indexing for sequences, so index 0 refers to the first element.',
      },
      {
        type: 'fill',
        title: 'Fill the Basket',
        prompt: 'Fill in the method to add "chili" to the end of the basket list.',
        codeBefore: 'basket = []\nbasket.___("chili")',
        codeAfter: '',
        answer: 'append',
        hints: ['Use the list method for appending items.'],
        explanation: '.append("chili") adds "chili" to the list end.',
      },
      {
        type: 'match',
        title: 'Methods of the Market',
        prompt: 'Match each list method call to its outcome.',
        left: ['[1,2].append(3)', '[1,2].pop()', '[3,1,2].sort()', '[1,2,3].remove(2)'],
        right: ['List becomes [1,2,3]', 'Returns 2 (list becomes [1])', 'List becomes [1,2,3]', 'List becomes [1,3]'],
        explanation: '.append adds item, .pop() removes & returns last item, .sort() orders in place, .remove(2) removes value 2.',
      },
      {
        type: 'sort',
        title: 'List or Not?',
        prompt: 'Categorize each data structure as a List or Non-List.',
        categories: [
          { label: 'list', tag: 'List' },
          { label: 'not list', tag: 'Other' },
        ],
        items: [
          { v: '[1, 2]', c: 'list' },
          { v: '[]', c: 'list' },
          { v: '(1, 2)', c: 'not list' },
          { v: '"list"', c: 'not list' },
        ],
        explanation: 'Square brackets [] define list objects.',
      },
      {
        type: 'sandbox',
        title: 'Modify the Basket',
        prompt: 'Start with <code>basket = ["apple"]</code>. Change the first item at index 0 to <code>"banana"</code>.',
        context: 'basket = ["apple"]\n# Your code below:',
        starter: 'basket[0] = "banana"',
        hints: ['Assign to basket[0].'],
        testCode: '\nassert "basket" in globals()\nassert basket == ["banana"]',
        fallbackCheck: (code) => /basket\s*\[\s*0\s*\]\s*=\s*["']banana["']/.test(code),
        successOut: '>>> basket\n["banana"]',
        failOut: 'Expected basket to be ["banana"]',
        explanation: 'Lists are mutable, so basket[0] = "banana" updates index 0 in place.',
      },
      {
        type: 'mcq',
        title: 'The Pop',
        prompt: 'What value does <code>[1, 2, 3].pop()</code> return?',
        options: ['[1, 2]', '3', 'None', 'Error'],
        answer: 1,
        explanation: '.pop() without arguments removes and returns the last element, which is 3.',
      },
      {
        type: 'fill',
        title: 'Remove by Value',
        prompt: 'Fill in the method to remove "apple" from the cart list by value.',
        codeBefore: 'cart = ["apple", "banana"]\ncart.___("apple")',
        codeAfter: '',
        answer: 'remove',
        hints: ['Use the remove method.'],
        explanation: '.remove("apple") searches for and removes the first matching value.',
      },
      {
        type: 'match',
        title: 'List Slicing',
        prompt: 'Match each slice on <code>L = [10, 20, 30]</code> to its result.',
        left: ['L[0]', 'L[0:2]', 'L[-1]', 'L[1:]'],
        right: ['10', '[10, 20]', '30', '[20, 30]'],
        explanation: 'L[0] is 10, L[0:2] is [10,20], L[-1] is 30, L[1:] is [20,30].',
      },
      {
        type: 'sandbox',
        title: 'Extend the Basket',
        prompt: 'Concatenate <code>a = [1]</code> and <code>b = [2, 3]</code> into variable <code>c</code>.',
        context: 'a = [1]\nb = [2, 3]\n# Your code below:',
        starter: 'c = a + b',
        hints: ['Use the + list concatenation operator.'],
        testCode: '\nassert "c" in globals()\nassert c == [1, 2, 3]',
        fallbackCheck: (code) => /c\s*=\s*a\s*\+\s*b/.test(code),
        successOut: '>>> c\n[1, 2, 3]',
        failOut: 'Expected c to be [1, 2, 3]',
        explanation: '[1] + [2, 3] creates a combined list [1, 2, 3].',
      },
      {
        type: 'debug',
        title: 'The Misplaced Chili',
        prompt: 'Guna called .remove() with an index integer instead of value. Find the line.',
        code: ['basket = ["rice", "chili"]', 'basket.remove(1)', 'print(basket)'],
        errorLine: 1,
        explanation: 'ValueError: list.remove(x) expects a value (e.g. "chili"), not an index integer.',
        options: ['Pass the value: basket.remove("chili")', 'Use .delete(1)', 'Enclose 1 in quotes', 'Use .drop(1)'],
      },
    ],
  },

  // LEVEL 6: Tuples
  {
    name: 'Tuples',
    title: 'The Immutable Mantras',
    location: 'Bumthang Sacred Valley',
    icon: '6',
    badge: 'Mantra Keeper',
    badgeIcon: '❖',
    story: 'In Bumthang valley, mantras carved into stone cannot be altered — they are eternal, like Python tuples. Ordered but immutable, tuples guard their contents forever.',
    theory: [
      {
        type: 'text',
        content: 'A <strong>Tuple</strong> is an immutable ordered sequence defined with parentheses <code>(a, b)</code>. Tuples cannot be modified after creation. A single-item tuple requires a trailing comma: <code>(1,)</code>. Support tuple unpacking: <code>lat, lon = (27.5, 89.6)</code>.',
      },
    ],
    cheats: [
      { m: '(a, b, c)', d: 'Tuple literal declaration' },
      { m: 'a, b = tuple', d: 'Unpack tuple values into variables' },
      { m: 'len(t)', d: 'Return total tuple element count' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Carved Stone',
        prompt: 'Which syntax creates a valid single-element tuple in Python?',
        options: ['(1)', '(1,)', '[1]', 'tuple(1)'],
        answer: 1,
        explanation: 'A trailing comma (1,) is required to distinguish a single-item tuple from parenthesized expressions.',
      },
      {
        type: 'fill',
        title: 'Unpack the Mantra',
        prompt: 'Fill in the assignment operator to unpack tuple <code>coords</code> into variables <code>lat</code> and <code>lon</code>.',
        codeBefore: 'coords = (27.5, 89.6)\nlat, lon ___ coords',
        codeAfter: '',
        answer: '=',
        hints: ['Use the single assignment operator.'],
        explanation: 'Tuple unpacking assigns elements directly to variables on the left.',
      },
      {
        type: 'sort',
        title: 'Stone or Basket?',
        prompt: 'Classify each code object as a Tuple or a List.',
        categories: [
          { label: 'tuple', tag: 'Tuple' },
          { label: 'list', tag: 'List' },
        ],
        items: [
          { v: '(1, 2)', c: 'tuple' },
          { v: '[1, 2]', c: 'list' },
          { v: '(3,)', c: 'tuple' },
          { v: '["x"]', c: 'list' },
        ],
        explanation: 'Parentheses (with commas) create tuples; square brackets create lists.',
      },
      {
        type: 'match',
        title: 'Tuple Methods',
        prompt: 'Match each tuple operation to its evaluated result.',
        left: ['(1,2,2).count(2)', '(1,2,3).index(2)', 'len((1,2,3))', '(1,2) + (3,)'],
        right: ['2', '1', '3', '(1,2,3)'],
        explanation: '.count(2) returns 2 (occurrences), .index(2) returns 1 (zero-based index), len is 3, + concatenates.',
      },
      {
        type: 'sandbox',
        title: 'Combine the Stones',
        prompt: 'Combine tuple <code>t1 = (1, 2)</code> and tuple <code>t2 = (3,)</code> into variable <code>combined</code>.',
        context: 't1 = (1, 2)\nt2 = (3,)\n# Your code below:',
        starter: 'combined = t1 + t2',
        hints: ['Use combined = t1 + t2.'],
        testCode: '\nassert "combined" in globals()\nassert combined == (1, 2, 3)',
        fallbackCheck: (code) => /combined\s*=\s*t1\s*\+\s*t2/.test(code),
        successOut: '>>> combined\n(1, 2, 3)',
        failOut: 'Expected combined to equal (1, 2, 3)',
        explanation: 'Tuple concatenation returns a new tuple containing elements of both.',
      },
      {
        type: 'mcq',
        title: 'The Immutable Stone',
        prompt: 'What happens when executing: <code>t = (1, 2); t[0] = 3</code>?',
        options: ['Changes t to (3, 2)', 'Raises a TypeError', 'Raises a SyntaxError', 'Creates a new tuple automatically'],
        answer: 1,
        explanation: 'Tuples are immutable; item assignment raises a TypeError.',
      },
      {
        type: 'fill',
        title: 'Tuple Length',
        prompt: 'Fill in the function to determine the number of items in tuple <code>t</code>.',
        codeBefore: 't = (1, 2, 3)\nsize = ___(t)',
        codeAfter: '',
        answer: 'len',
        hints: ['Use the built-in len function.'],
        explanation: 'len(t) returns the number of elements in tuple t.',
      },
      {
        type: 'match',
        title: 'Indexing',
        prompt: 'Match each index on tuple <code>t = (10, 20, 30)</code> to its value.',
        left: ['t[0]', 't[1]', 't[-1]', 't[-2]'],
        right: ['10', '20', '30', '20'],
        explanation: 't[0] is 10, t[1] is 20, t[-1] is 30, t[-2] is 20.',
      },
      {
        type: 'sandbox',
        title: 'Access the Stone',
        prompt: 'Retrieve the first element (latitude) from tuple <code>coords = (27.5, 89.6)</code> and store in <code>lat</code>.',
        context: 'coords = (27.5, 89.6)\n# Your code below:',
        starter: 'lat = coords[0]',
        hints: ['Use coords[0].'],
        testCode: '\nassert "lat" in globals()\nassert lat == 27.5',
        fallbackCheck: (code) => /lat\s*=\s*coords\s*\[\s*0\s*\]/.test(code),
        successOut: '>>> lat\n27.5',
        failOut: 'Expected lat to equal 27.5',
        explanation: 'coords[0] accesses the first item of the tuple.',
      },
      {
        type: 'debug',
        title: 'The Unbreakable Stone',
        prompt: 'Guna tried to modify an element inside a tuple. Identify the line that caused the error.',
        code: ['mantra = ("Om", "Mani")', 'mantra[0] = "Aum"', 'print(mantra)'],
        errorLine: 1,
        explanation: "TypeError: 'tuple' object does not support item assignment. Create a new tuple instead.",
        options: ['Create a new tuple: mantra = ("Aum", mantra[1])', 'Use .append()', 'Use .insert()', 'Embed inside a list'],
      },
    ],
  },

  // LEVEL 7: Sets
  {
    name: 'Sets',
    title: 'The Unique Stones',
    location: 'Wang Chhu River',
    icon: '7',
    badge: 'Stone Sorter',
    badgeIcon: '◈',
    story: 'At the Wang Chhu river, every stone is unique — no two alike. Python sets mirror this: unordered collections of distinct elements. Guna learns to gather, intersect, and differ.',
    theory: [
      {
        type: 'text',
        content: 'A <strong>Set</strong> is an unordered collection of <strong>unique</strong> elements written with curly braces <code>{1, 2, 3}</code>. Sets automatically eliminate duplicates. Key set operations: <code>.union()</code> (combine), <code>.intersection()</code> (common elements), <code>.difference()</code> (elements in A but not B). Empty set is created with <code>set()</code>.',
      },
    ],
    cheats: [
      { m: '{1, 2, 3}', d: 'Set literal declaration' },
      { m: '.add(x)', d: 'Add element x to set' },
      { m: 'set(list)', d: 'Deduplicate list elements into set' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: "The River's Test",
        prompt: 'What happens when you add a duplicate value to an existing Python set?',
        options: ['Raises an error', 'Keeps both copies', 'Keeps only one unique copy (ignores duplicate)', 'Appends to end'],
        answer: 2,
        explanation: 'Sets only store unique elements; adding a duplicate is safely ignored.',
      },
      {
        type: 'fill',
        title: 'Purify the Stones',
        prompt: 'Fill in the constructor to convert list <code>stones = [1, 1, 2]</code> into a set with unique elements.',
        codeBefore: 'stones = [1, 1, 2]\nunique = ___(stones)',
        codeAfter: '',
        answer: 'set',
        hints: ['Use the set() constructor.'],
        explanation: 'set([1, 1, 2]) removes duplicates and returns {1, 2}.',
      },
      {
        type: 'sort',
        title: 'Unique vs Ordered',
        prompt: 'Classify each code structure as a Set or a List.',
        categories: [
          { label: 'set', tag: 'Set' },
          { label: 'list', tag: 'List' },
        ],
        items: [
          { v: '{1, 2}', c: 'set' },
          { v: '[1, 2]', c: 'list' },
          { v: 'set()', c: 'set' },
          { v: '[]', c: 'list' },
        ],
        explanation: 'Curly braces {} (or set()) create sets; [] creates lists.',
      },
      {
        type: 'match',
        title: 'Methods of the River',
        prompt: 'Match each set expression to its evaluated output.',
        left: ['{1,2}.union({3})', '{1,2}.intersection({2,3})', '{1,2}.difference({2})', 'len({1,1,2})'],
        right: ['{1,2,3}', '{2}', '{1}', '2'],
        explanation: 'union combines sets, intersection finds common elements, difference subtracts, len counts uniques.',
      },
      {
        type: 'sandbox',
        title: 'The Intersection',
        prompt: 'Find common elements between set <code>A = {1, 2}</code> and set <code>B = {2, 3}</code>. Assign to <code>C</code>.',
        context: 'A = {1, 2}\nB = {2, 3}\n# Your code below:',
        starter: 'C = A.intersection(B)',
        hints: ['Use C = A.intersection(B) or C = A & B.'],
        testCode: '\nassert "C" in globals()\nassert C == {2}',
        fallbackCheck: (code) => /C\s*=\s*A\.intersection\s*\(\s*B\s*\)/.test(code) || /C\s*=\s*A\s*&\s*B/.test(code),
        successOut: '>>> C\n{2}',
        failOut: 'Expected C to equal {2}',
        explanation: 'Intersection finds elements present in both sets, yielding {2}.',
      },
      {
        type: 'mcq',
        title: 'The Ordered Illusion',
        prompt: 'What happens if you attempt to access a set element by index: <code>S = {1, 2}; print(S[0])</code>?',
        options: ['Prints 1', 'Prints None', 'Raises a TypeError', 'Prints 0'],
        answer: 2,
        explanation: "TypeError: 'set' object is not subscriptable because sets are unordered.",
      },
      {
        type: 'fill',
        title: 'Add to Set',
        prompt: 'Fill in the method to insert value 5 into set <code>S</code>.',
        codeBefore: 'S = {1, 2}\nS.___(5)',
        codeAfter: '',
        answer: 'add',
        hints: ['Use the .add() method.'],
        explanation: '.add(x) inserts element x into a set.',
      },
      {
        type: 'match',
        title: 'Set Operations',
        prompt: 'Match each set operation method to its Venn diagram operation.',
        left: ['union', 'intersection', 'difference', 'add'],
        right: ['A ∪ B (Combine all elements)', 'A ∩ B (Common elements)', 'A - B (Elements in A, not B)', 'Insert single item'],
        explanation: 'union merges, intersection overlaps, difference subtracts, add inserts.',
      },
      {
        type: 'sandbox',
        title: 'The Difference',
        prompt: 'Find elements present in set <code>A = {1, 2, 3}</code> but NOT in set <code>B = {2}</code>. Store in <code>D</code>.',
        context: 'A = {1, 2, 3}\nB = {2}\n# Your code below:',
        starter: 'D = A.difference(B)',
        hints: ['Use D = A.difference(B) or D = A - B.'],
        testCode: '\nassert "D" in globals()\nassert D == {1, 3}',
        fallbackCheck: (code) => /D\s*=\s*A\.difference\s*\(\s*B\s*\)/.test(code) || /D\s*=\s*A\s*-\s*B/.test(code),
        successOut: '>>> D\n{1, 3}',
        failOut: 'Expected D to equal {1, 3}',
        explanation: 'A.difference(B) removes elements of B from A, leaving {1, 3}.',
      },
      {
        type: 'debug',
        title: 'The Ordered Illusion Debug',
        prompt: 'Guna tried to subscript a set with an index integer. Find the erroneous line.',
        code: ['stones = {1, 2, 3}', 'print(stones[0])', 'stones.add(4)'],
        errorLine: 1,
        explanation: "TypeError: 'set' object is not subscriptable. Convert to list first: list(stones)[0].",
        options: ['Convert set to list first: list(stones)[0]', 'Use .get(0)', 'Use .first()', 'Sort the set'],
      },
    ],
  },

  // LEVEL 8: Dictionaries
  {
    name: 'Dictionaries',
    title: 'The Dzong Archives',
    location: 'Trongsa Dzong',
    icon: '8',
    badge: 'Archive Master',
    badgeIcon: '✦',
    story: 'Deep within Trongsa Dzong lie the archives — each scroll labeled with a key, holding a record of value. Python dictionaries mirror this wisdom: key-value pairs, mutable and vast.',
    theory: [
      {
        type: 'text',
        content: 'A <strong>Dictionary (dict)</strong> maps unique <strong>keys</strong> to <strong>values</strong> using curly braces: <code>{"name": "Guna", "age": 25}</code>. Access values via <code>d["key"]</code> or safely with <code>d.get("key", default)</code>. Useful methods: <code>.keys()</code>, <code>.values()</code>, <code>.items()</code>.',
      },
    ],
    cheats: [
      { m: '{"k": v}', d: 'Dictionary key-value literal' },
      { m: '.keys()', d: 'Return sequence of dictionary keys' },
      { m: '.get(k, def)', d: 'Safely fetch value for key k' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Archive Scroll',
        prompt: 'What happens when accessing a non-existent key using square brackets: <code>d["missing"]</code>?',
        options: ['Returns None', 'Raises a KeyError', 'Creates the key automatically', 'Returns False'],
        answer: 1,
        explanation: 'Accessing a missing key via [] raises a KeyError exception.',
      },
      {
        type: 'fill',
        title: 'Safe Retrieval',
        prompt: 'Fill in the method to safely retrieve key "city" without crashing if missing.',
        codeBefore: 'scroll = {"name": "Guna"}\ncity = scroll.___("city")',
        codeAfter: '',
        answer: 'get',
        hints: ['Use the safe access method on dictionaries.'],
        explanation: '.get("city") returns None (or default) instead of throwing KeyError.',
      },
      {
        type: 'match',
        title: 'Archive Methods',
        prompt: 'Match each dictionary method call to its returned object type.',
        left: ['d.keys()', 'd.values()', 'd.items()', 'd.get("x")'],
        right: ['dict_keys sequence', 'dict_values sequence', 'dict_items key-value pairs', 'Value or None'],
        explanation: '.keys() gets keys, .values() gets values, .items() gets (key, value) tuples, .get() gets value safely.',
      },
      {
        type: 'sort',
        title: 'Dict or Set?',
        prompt: 'Classify each curly brace literal as a Dictionary or a Set.',
        categories: [
          { label: 'dict', tag: 'Dictionary' },
          { label: 'set', tag: 'Set' },
        ],
        items: [
          { v: '{"a": 1}', c: 'dict' },
          { v: '{1, 2}', c: 'set' },
          { v: '{}', c: 'dict' },
          { v: 'set()', c: 'set' },
        ],
        explanation: 'Key-value pairs (or {}) are dictionaries; single elements are sets.',
      },
      {
        type: 'sandbox',
        title: 'Add to the Archive',
        prompt: 'Add a new key <code>"city"</code> with value <code>"Paro"</code> to dictionary <code>monk</code>.',
        context: 'monk = {"name": "Guna"}\n# Your code below:',
        starter: 'monk["city"] = "Paro"',
        hints: ['Assign monk["city"] = "Paro".'],
        testCode: '\nassert "monk" in globals()\nassert monk.get("city") == "Paro"',
        fallbackCheck: (code) => /monk\s*\[\s*["']city["']\s*\]\s*=\s*["']Paro["']/.test(code),
        successOut: '>>> monk\n{"name": "Guna", "city": "Paro"}',
        failOut: 'Expected monk["city"] to equal "Paro"',
        explanation: 'd["new_key"] = value creates or updates the key-value pair.',
      },
      {
        type: 'mcq',
        title: 'The Missing Key',
        prompt: 'What does <code>d.get("missing", "default_val")</code> return if "missing" is not in d?',
        options: ['None', '"default_val"', 'KeyError', '"missing"'],
        answer: 1,
        explanation: 'The second parameter of .get() specifies the fallback return value if the key is missing.',
      },
      {
        type: 'fill',
        title: 'Access Value',
        prompt: 'Fill in the key string to access the value stored under key "name".',
        codeBefore: 'd = {"name": "Guna"}\nval = d["___"]',
        codeAfter: '',
        answer: 'name',
        hints: ['Type the key string name.'],
        explanation: 'd["name"] accesses the value associated with key "name".',
      },
      {
        type: 'match',
        title: 'Dict Concepts',
        prompt: 'Match each dictionary concept to its description.',
        left: ['Key', 'Value', '{"k": v}', 'd.items()'],
        right: ['Unique label identifier', 'Stored data payload', 'Dictionary literal', 'Sequence of (key, value) pairs'],
        explanation: 'Keys identify data, values store data, {} denotes dict literal, .items() yields key-value tuples.',
      },
      {
        type: 'sandbox',
        title: 'Update Value',
        prompt: 'Update the value for existing key <code>"age"</code> to 26 in dictionary <code>d</code>.',
        context: 'd = {"name": "Guna", "age": 25}\n# Your code below:',
        starter: 'd["age"] = 26',
        hints: ['Set d["age"] = 26.'],
        testCode: '\nassert "d" in globals()\nassert d.get("age") == 26',
        fallbackCheck: (code) => /d\s*\[\s*["']age["']\s*\]\s*=\s*26/.test(code),
        successOut: '>>> d["age"]\n26',
        failOut: 'Expected d["age"] to equal 26',
        explanation: 'Assigning to an existing key updates its value.',
      },
      {
        type: 'debug',
        title: 'The Missing Scroll',
        prompt: 'Guna accessed a key that does not exist using bracket notation. Identify the broken line.',
        code: ['scroll = {"name": "Guna"}', 'print(scroll["age"])', 'print(scroll["name"])'],
        errorLine: 1,
        explanation: "KeyError: 'age'. Use scroll.get('age') or verify key existence before accessing.",
        options: ['Use scroll.get("age") for safe access', 'Use .find()', 'Use .has()', 'Enclose key in extra quotes'],
      },
    ],
  },

  // LEVEL 9: Control Flow
  {
    name: 'Control Flow',
    title: "The Dancer's Loop",
    location: 'Paro Tshechu Festival',
    icon: '9',
    badge: 'Flow Master',
    badgeIcon: '🌀',
    story: 'The masked dancers at the Paro Tshechu repeat their sacred steps in perfect rhythm — a loop of tradition. Guna must learn to control the flow of his code with if, for, and while.',
    theory: [
      {
        type: 'text',
        content: '<strong>Conditionals (if/elif/else)</strong> execute blocks of code based on boolean truth. <strong>For loops</strong> iterate through sequences (lists, strings, range). <strong>While loops</strong> repeat while a condition remains True. Python uses <strong>indentation</strong> (typically 4 spaces) to define code blocks.',
      },
    ],
    cheats: [
      { m: 'if / elif / else', d: 'Conditional branching syntax' },
      { m: 'for item in seq:', d: 'Iterate over sequence elements' },
      { m: 'while condition:', d: 'Repeat while condition is True' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Broken Rhythm',
        prompt: 'What triggers an <code>IndentationError</code> in Python?',
        options: ['Missing colon after if', 'Inconsistent or missing indentation in code blocks', 'Missing parentheses', 'Using reserved words'],
        answer: 1,
        explanation: 'Python relies on strict indentation to group statements into blocks. Inconsistent spaces cause IndentationError.',
      },
      {
        type: 'fill',
        title: 'The Looping Dance',
        prompt: 'Fill in the loop keyword to iterate through the list.',
        codeBefore: 'numbers = [1, 2, 3]\n___ num in numbers:\n    print(num)',
        codeAfter: '',
        answer: 'for',
        hints: ['Use the for loop keyword.'],
        explanation: 'for num in numbers iterates through each element.',
      },
      {
        type: 'sort',
        title: 'Steps of the Dance',
        prompt: 'Classify each reserved word as a Control Flow keyword or a Data Type.',
        categories: [
          { label: 'control', tag: 'Control Flow' },
          { label: 'data', tag: 'Data Type' },
        ],
        items: [
          { v: 'for', c: 'control' },
          { v: 'if', c: 'control' },
          { v: 'list', c: 'data' },
          { v: 'else', c: 'control' },
        ],
        explanation: 'for, if, and else manage execution flow; list is a built-in type constructor.',
      },
      {
        type: 'match',
        title: 'Flow Keywords',
        prompt: 'Match each keyword to its control flow role.',
        left: ['if', 'elif', 'else', 'for'],
        right: ['Initial conditional branch', 'Alternative conditional branch', 'Fallback catch-all branch', 'Sequence iteration loop'],
        explanation: 'if starts conditional, elif provides alternate checks, else is fallback, for loops over items.',
      },
      {
        type: 'sandbox',
        title: "The Gatekeeper's Riddle",
        prompt: 'Write an if/else check: if <code>offering > 5</code>, set <code>result = "accepted"</code>; otherwise set <code>result = "denied"</code>.',
        context: 'offering = 10\n# Your code below:',
        starter: 'if offering > 5:\n    result = "accepted"\nelse:\n    result = "denied"',
        hints: ['Use if offering > 5: result = "accepted" else: result = "denied".'],
        testCode: '\nassert "result" in globals()\nassert result == "accepted"',
        fallbackCheck: (code) => /if\s+offering\s*>\s*5/.test(code) && /result\s*=\s*["']accepted["']/.test(code),
        successOut: '>>> result\n"accepted"',
        failOut: 'Expected result to equal "accepted"',
        explanation: '10 > 5 is True, so result receives "accepted".',
      },
      {
        type: 'mcq',
        title: 'The Break',
        prompt: 'What does the <code>break</code> statement do inside a loop?',
        options: ['Skips current iteration', 'Terminates the loop immediately', 'Pauses execution', 'Restarts the loop'],
        answer: 1,
        explanation: 'break immediately exits the innermost enclosing loop.',
      },
      {
        type: 'fill',
        title: 'While Loop',
        prompt: 'Fill in the keyword to construct a loop that repeats while x < 10.',
        codeBefore: 'x = 0\n___ x < 10:\n    x += 1',
        codeAfter: '',
        answer: 'while',
        hints: ['Use the while keyword.'],
        explanation: 'while loops continue execution as long as the condition evaluates to True.',
      },
      {
        type: 'match',
        title: 'Loop Control Statements',
        prompt: 'Match each loop control statement to its behavior.',
        left: ['for', 'while', 'break', 'continue'],
        right: ['Iterates over a sequence', 'Loops while condition is true', 'Exits loop prematurely', 'Skips to next iteration'],
        explanation: 'for iterates over collections, while checks conditions, break exits, continue skips to next cycle.',
      },
      {
        type: 'sandbox',
        title: 'The Accumulating Dance',
        prompt: 'Iterate through <code>nums = [1, 2, 3]</code> with a for loop and accumulate their sum into <code>total</code> (starting at 0).',
        context: 'nums = [1, 2, 3]\ntotal = 0\n# Your code below:',
        starter: 'for n in nums:\n    total += n',
        hints: ['Use for n in nums: total += n.'],
        testCode: '\nassert "total" in globals()\nassert total == 6',
        fallbackCheck: (code) => /for\s+\w+\s+in\s+nums/.test(code) && /total\s*\+=/.test(code),
        successOut: '>>> total\n6',
        failOut: 'Expected total to equal 6',
        explanation: 'Looping through [1, 2, 3] adds 1 + 2 + 3 = 6.',
      },
      {
        type: 'debug',
        title: 'The Misplaced Step',
        prompt: 'Guna forgot to indent the block body under an if statement. Find the line with the IndentationError.',
        code: ['x = 10', 'if x > 5:', 'print("Greater")'],
        errorLine: 2,
        explanation: 'IndentationError: Expected an indented block after if statement.',
        options: ['Indent line 3: print("Greater")', 'Add semicolon', 'Remove if statement', 'Change x value'],
      },
    ],
  },

  // LEVEL 10: Functions
  {
    name: 'Functions',
    title: "The Architect's Blueprint",
    location: 'Gangteng Monastery',
    icon: '10',
    badge: 'Code Architect',
    badgeIcon: '📐',
    story: 'High in the Black Mountains, Gangteng Monastery stands as a masterpiece of precise architecture. Every pillar follows a reusable blueprint. Guna learns to write functions.',
    theory: [
      {
        type: 'text',
        content: 'A <strong>Function</strong> is a reusable block of code defined with <code>def function_name(param1, param2):</code>. Use the <code>return</code> statement to send values back to the caller. Functions without an explicit return statement return <code>None</code> by default.',
      },
    ],
    cheats: [
      { m: 'def name(args):', d: 'Define a function signature' },
      { m: 'return value', d: 'Return output to caller' },
      { m: 'name(args)', d: 'Invoke or call function' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: 'The Blueprint',
        prompt: 'Which keyword is used to define a custom function in Python?',
        options: ['func', 'def', 'function', 'define'],
        answer: 1,
        explanation: 'def (short for define) is Python\'s keyword for function declarations.',
      },
      {
        type: 'fill',
        title: 'The Return Path',
        prompt: 'Fill in the keyword to send the calculated sum back to the function caller.',
        codeBefore: 'def add(a, b):\n    ___ a + b',
        codeAfter: '',
        answer: 'return',
        hints: ['Use the return keyword.'],
        explanation: 'return specifies the value produced by a function call.',
      },
      {
        type: 'match',
        title: 'Function Anatomy',
        prompt: 'Match each function component to its structural role.',
        left: ['def greet(name):', 'name', 'return "Hello"', 'greet("Guna")'],
        right: ['Function definition signature', 'Parameter variable', 'Return value statement', 'Function invocation call'],
        explanation: 'def declares, parameter receives argument, return sends back value, invocation executes function.',
      },
      {
        type: 'sort',
        title: 'Function vs Loop Syntax',
        prompt: 'Classify each reserved word as Function syntax or Loop syntax.',
        categories: [
          { label: 'func', tag: 'Functions' },
          { label: 'loop', tag: 'Loops' },
        ],
        items: [
          { v: 'def', c: 'func' },
          { v: 'return', c: 'func' },
          { v: 'for', c: 'loop' },
          { v: 'while', c: 'loop' },
        ],
        explanation: 'def and return belong to functions; for and while control loops.',
      },
      {
        type: 'sandbox',
        title: 'Forge the Pillar',
        prompt: 'Define function <code>add_chili(basket)</code> that appends <code>"chili"</code> to a list and returns the updated list.',
        context: '# Write your function below:',
        starter: 'def add_chili(basket):\n    basket.append("chili")\n    return basket',
        hints: ['Use def add_chili(basket): basket.append("chili") return basket.'],
        testCode: '\nassert "add_chili" in globals()\nassert callable(add_chili)\nassert add_chili([]) == ["chili"]',
        fallbackCheck: (code) => /def\s+add_chili\s*\(basket\):/.test(code) && /return\s+basket/.test(code),
        successOut: '>>> add_chili([])\n["chili"]',
        failOut: 'Expected add_chili([]) to return ["chili"]',
        explanation: 'The function mutates the list and returns it to the caller.',
      },
      {
        type: 'mcq',
        title: 'The Output',
        prompt: 'What value is returned by a function that has no <code>return</code> statement?',
        options: ['0', 'None', 'Error', 'True'],
        answer: 1,
        explanation: 'In Python, functions without an explicit return statement return None automatically.',
      },
      {
        type: 'fill',
        title: 'Define Function',
        prompt: 'Fill in the keyword to declare function <code>greet()</code>.',
        codeBefore: '___ greet():\n    print("Hello")',
        codeAfter: '',
        answer: 'def',
        hints: ['Use the def keyword.'],
        explanation: 'def begins a function declaration.',
      },
      {
        type: 'match',
        title: 'Function Parts',
        prompt: 'Match each term to its definition.',
        left: ['def add(a, b):', 'a, b', 'add(1, 2)', '1, 2'],
        right: ['Function declaration', 'Parameters (placeholders)', 'Function call', 'Arguments (actual values)'],
        explanation: 'Parameters are variable placeholders; arguments are actual values passed during execution.',
      },
      {
        type: 'sandbox',
        title: 'Call the Blueprint',
        prompt: 'Define function <code>get_pi()</code> that returns <code>3.14</code>. Then call it and store in variable <code>pi</code>.',
        context: '# Define and call below:',
        starter: 'def get_pi():\n    return 3.14\n\npi = get_pi()',
        hints: ['Define get_pi() with return 3.14, then assign pi = get_pi().'],
        testCode: '\nassert "pi" in globals()\nassert pi == 3.14',
        fallbackCheck: (code) => /def\s+get_pi\s*\(\s*\):/.test(code) && /return\s+3\.14/.test(code) && /pi\s*=\s*get_pi\s*\(\s*\)/.test(code),
        successOut: '>>> pi\n3.14',
        failOut: 'Expected pi to equal 3.14',
        explanation: 'Calling get_pi() executes the function and returns 3.14.',
      },
      {
        type: 'debug',
        title: 'The Missing Blueprint Colon',
        prompt: 'Guna forgot a colon at the end of a function declaration. Identify the line.',
        code: ['def greet(name)', '    return "Hello " + name', 'greet("Guna")'],
        errorLine: 0,
        explanation: 'SyntaxError: Function header declarations require a trailing colon (def greet(name):).',
        options: ['Add colon : after (name)', 'Add return keyword', 'Change def to func', 'Remove parentheses'],
      },
    ],
  },

  // LEVEL 11: Error Handling
  {
    name: 'Error Handling',
    title: 'The Graceful Fall',
    location: 'Cliffside Retreat',
    icon: '11',
    badge: 'Graceful Guardian',
    badgeIcon: '🛡️',
    story: 'Even the most seasoned monk can stumble on the steep cliffside paths. In Python, errors (Exceptions) can cause a program to crash entirely. Guna learns the art of try...except.',
    theory: [
      {
        type: 'text',
        content: 'When runtime errors occur, Python raises <strong>Exceptions</strong> (e.g. <code>ZeroDivisionError</code>, <code>ValueError</code>, <code>TypeError</code>, <code>KeyError</code>). Handle exceptions gracefully using <code>try:</code> and <code>except ExceptionType:</code> blocks to prevent application crashes.',
      },
    ],
    cheats: [
      { m: 'try:', d: 'Enclose code that might raise exceptions' },
      { m: 'except Error:', d: 'Catch and handle specific exception' },
      { m: 'finally:', d: 'Execute clean-up block unconditionally' },
    ],
    challenges: [
      {
        type: 'mcq',
        title: "The Guardian's Vow",
        prompt: 'What is the primary purpose of a <code>try...except</code> block in Python?',
        options: ['To speed up code execution', 'To catch and handle runtime errors gracefully', 'To ignore lines of code', 'To create loops'],
        answer: 1,
        explanation: 'try...except catches runtime exceptions so programs can handle errors without crashing.',
      },
      {
        type: 'fill',
        title: 'The Safe Path',
        prompt: 'Fill in the keyword to catch any exception raised in the try block.',
        codeBefore: 'try:\n    x = 1 / 0\n___:\n    print("Error")',
        codeAfter: '',
        answer: 'except',
        hints: ['Use the except keyword.'],
        explanation: 'except catches exceptions raised inside the preceding try block.',
      },
      {
        type: 'match',
        title: 'The Error Scrolls',
        prompt: 'Match each illegal operation to the Exception type it raises.',
        left: ['10 / 0', 'int("abc")', 'unknown_var', '[1,2][5]'],
        right: ['ZeroDivisionError', 'ValueError', 'NameError', 'IndexError'],
        explanation: '10/0 raises ZeroDivisionError, int("abc") raises ValueError, undefined var raises NameError, index out of range raises IndexError.',
      },
      {
        type: 'sort',
        title: 'Error vs Loop Keywords',
        prompt: 'Classify each keyword as Error Handling or Loop Control.',
        categories: [
          { label: 'err', tag: 'Error Handling' },
          { label: 'loop', tag: 'Loop Control' },
        ],
        items: [
          { v: 'try', c: 'err' },
          { v: 'except', c: 'err' },
          { v: 'for', c: 'loop' },
          { v: 'while', c: 'loop' },
        ],
        explanation: 'try and except handle exceptions; for and while control loops.',
      },
      {
        type: 'sandbox',
        title: 'The Graceful Fall',
        prompt: 'Wrap <code>result = 10 / 0</code> in a try/except block. If an error occurs, set <code>result = "safe"</code>.',
        context: '# Your code below:',
        starter: 'try:\n    result = 10 / 0\nexcept:\n    result = "safe"',
        hints: ['Use try: result = 10 / 0 except: result = "safe".'],
        testCode: '\nassert "result" in globals()\nassert result == "safe"',
        fallbackCheck: (code) => /try\s*:/.test(code) && /except\s*:?/.test(code) && /result\s*=\s*["']safe["']/.test(code),
        successOut: '>>> result\n"safe"',
        failOut: 'Expected result to equal "safe"',
        explanation: '10 / 0 raises ZeroDivisionError, which is caught by except, assigning "safe" to result.',
      },
      {
        type: 'mcq',
        title: 'The Exception',
        prompt: 'What is an Exception in Python?',
        options: ['A syntax formatting error', 'An event triggered during execution that disrupts normal instruction flow', 'A special variable type', 'A type of loop'],
        answer: 1,
        explanation: 'Exceptions are runtime events raised when errors occur during execution.',
      },
      {
        type: 'fill',
        title: 'Catch Specific',
        prompt: 'Fill in the keyword to catch a specific ValueError exception.',
        codeBefore: 'try:\n    int("hello")\n___ ValueError:\n    print("Bad value")',
        codeAfter: '',
        answer: 'except',
        hints: ['Use the except keyword.'],
        explanation: 'except ValueError catches specifically ValueError exceptions.',
      },
      {
        type: 'match',
        title: 'Error Handling Blocks',
        prompt: 'Match each keyword to its execution role.',
        left: ['try:', 'except:', 'finally:', 'raise'],
        right: ['Encapsulate code that might fail', 'Execute handler if exception occurs', 'Execute cleanup code regardless of errors', 'Manually trigger an exception'],
        explanation: 'try attempts execution, except catches errors, finally runs always, raise throws exceptions manually.',
      },
      {
        type: 'sandbox',
        title: 'Catch TypeError',
        prompt: 'Attempt <code>res = 1 + "a"</code> inside try. Catch <code>TypeError</code> and set <code>res = 0</code>.',
        context: '# Your code below:',
        starter: 'try:\n    res = 1 + "a"\nexcept TypeError:\n    res = 0',
        hints: ['Use try: res = 1 + "a" except TypeError: res = 0.'],
        testCode: '\nassert "res" in globals()\nassert res == 0',
        fallbackCheck: (code) => /try\s*:/.test(code) && /except\s+TypeError\s*:/.test(code) && /res\s*=\s*0/.test(code),
        successOut: '>>> res\n0',
        failOut: 'Expected res to equal 0',
        explanation: '1 + "a" raises TypeError, caught by except TypeError, setting res to 0.',
      },
      {
        type: 'debug',
        title: 'The Uncaught Fall',
        prompt: 'Guna wrote a handler for TypeError, but int("text") raises a ValueError! Identify the line to fix.',
        code: ['try:', '    val = int("text")', 'except TypeError:', '    print("Error")'],
        errorLine: 2,
        explanation: 'int("text") raises a ValueError, not a TypeError. Change handler to except ValueError:.',
        options: ['Change to except ValueError:', 'Change to except LoopError:', 'Remove try block', 'Add a return statement'],
      },
    ],
  },
];
