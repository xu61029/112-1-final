let lastSelectedCategory = '';
const categories = {
    transposition: [
        {
            title: "換位基本知識(1/2)",
            content: "什麼是換位加密？",
            options: ["一种字符重新排列的加密技术", "一种替换字符的加密技术", "一种基于图形的加密技术"],
            answer: 0
        },
        {
            title: "換位基本知識(2/2)",
            content: "換位加密是否修改字符的值？",
            options: ["是", "否"],
            answer: 1
        },
        {
            title: "換位小題目(1/11)",
            content: "將明文 HELLO 使用鐵軌密碼（rail fence cipher）以2為間隔加密，得到的密文是：",
            options: ["HLOEL", "HLELO", "HLEOL","HOELL"],
            answer: 1
        },
        {
            title: "換位小題目(2/11)",
            content: "將明文 CIPHER 以位移3加密，得到的密文是：",
            options: ["FKSLHU", "FMSKJU", "FLSKHU","FKSJHU"],
            answer: 1
        },
        {
            title: "換位小題目(3/11)",
            content: "將明文 ENCRYPT 以位移7加密，得到的密文是",
            options: ["LUDSZWA", "LCYQSPV", "LUJAXWZ","LCPLUHO"],
            answer: 1
        },
        {
            title: "換位小題目(4/11)",
            content: "將密文 EULAVTXETROF 使用換位反轉解密，得到的明文是：",
            options: ["EXTRA VOLUTE", "EVOLUTIONARY", "EVOLUTION TAX","EXTRA EVOLUTED"],
            answer: 1
        },
        {
            title: "換位小題目(5/11)",
            content: "將密文 GNINIARTSDEEW 使用換位反轉解密，得到的明文是：：",
            options: ["WEDDINGS IN TEA", "WEDDINGS RETINA", "WEDDINGS NEAR IT","WEDDINGS IN RATE"],
            answer: 0
        },
        {
            title: "換位小題目(6/11)",
            content: "將密文 NROFAOLXETUV 進行換位反轉後左移3位再右移2位，得到的明文是：",
            options: ["REVOLUTIONARY", "EVOLUTIONARY", "INVOLUNTARY","EVOLUTIONARY"],
            answer: 1
        },
        {
            title: "換位小題目(7/11)",
            content: "將密文 NSDTNWIEDGNI 進行換位反轉後左移4位再右移1位，得到的明文是：",
            options: ["WEDDINGS IN TEN", "WEDDINGS IN NET", "WEDDINGS IN END","WEDDINGS IN DEN"],
            answer: 0
        },
        {
            title: "換位小題目(8/11)",
            content: "將明文 WISDOM 按照菱形進行換位加密，得到的密文是：",
            options: ["WDSMOI", "ODWISM", "WSOMDI","WOIDMS"],
            answer: 1
        },
        {
            title: "換位小題目(9/11)",
            content: "將明文 PUZZLES 按照梯形進行換位加密，得到的密文是：",
            options: ["PZULEZS", "ZLEPSZU", "ZPELZUS","UZPZELS"],
            answer: 2
        },
        {
            title: "換位小題目(10/11)",
            content: "這是一個包含4*4換位表的題目，讓你翻成密文：\n\n" +
                    "明文為：HELLOTHISISATEST"+
                    "換位表：\n" +
                    "10\t\t04\t\t15\t\t07\n" +
                    " 08 12 03 13\n" +
                    " 02  09  06 11\n" +
                    "16  01 14  05\n\n" ,
                    
            options: ["LOSTIHTLISEEHAT", "OHTLIHLEESTATOS", "OTSHILIEHATTLSE", "LTHOISEHTLAEIST"],
            answer: 2
        },
        {
            title: "換位小題目(11/11)",
            content: "這是一個包含4*4換位表的題目，讓你翻成密文：\n\n" +
                    "明文為：THISISASECRETMESS"+
                    "換位表：\n" +
                    "05\t03\t10\t06\n" +
                    "01\t11\t14\t12\n" +
                    "16\t07\t09\t15\n" +
                    "08\t02\t13\t04\n\n" ,
                    
            options: ["TITSEHESIMSCRAE", "TIHCEMSIATRSEES", "TSSMHIREIATCESE", "TIHSEISATRMCEES"],
            answer: 3
        }
        
    ],
    substitution: [
        {
            title: "取代小題目(1/5)",
            content: "使用 (y = 3x + 5 mod 26) 將明文 'CRYPTO' 加密，得到的密文是：",
            options: ["JXFAEM", "DASRUM", "BYGVUM", "ZSYKAP"],
            answer: 2 
        },
        {
            title: "取代小題目(2/5)",
            content: "使用 (y = 7x + 10 mod 26) 將明文 'HELLO' 加密，得到的密文是：",
            options: ["VXSSG", "PEZZA", "TBGGA", "PBZZO"],
            answer: 0 // 答案是選項中的第一個（索引为0）
        },
        {
            title: "取代小題目(3/5)",
            content: "使用 (y = 9x + 15 mod 26) 將明文 'SECRET' 加密，得到的密文是：",
            options: ["ZVRRAB", "HJJIJX", "PMMBMP", "WKKEKM"],
            answer: 0 // 答案是選項中的第一個（索引为0）
        },
        {
            title: "取代小題目(4/5)",
            content: "使用(y = 15x + 7 mod 26) 將密文 'OKFFA' 解密，得到的明文是：",
            options: ["HELLO", "WORLD", "GREAT", "APPLE"],
            answer: 1 // 答案是選項中的第二個（索引为1）
        },
        {
            title: "取代小題目(5/5)",
            content: "將加密過的密文 'PJZV' 使用 (y = 21x + 8 mod 26) 進行解密，得到的明文是：",
            options: ["APPLE", "BANANA", "CHERRY", "ORANGE"],
            answer: 3 // 答案是選項中的第四個（索引为3）
        }
    ],
    finiteField: [
        {
            title: "finiteField小題目1",
            content: "在有限體GF(7)中，求解方程式 3x + 4 = 6 的解：",
            options: ["x = 5", "x = 0", "x = 1", "x = 6"],
            answer: 1 // 答案是選項中的第二個（索引为1）
        },
        {
        title: "finiteField小題目2",
        content: "在有限體GF(5)中，計算 4 × 3 的結果是多少？",
        options: ["2", "0", "1", "3"],
        answer: 3 // 答案是選項中的第四個（索引为3）
        },
        {
        title: "finiteField小題目3",
        content: "在有限體GF(11)中，求解方程式 5x = 8 的解：",
        options: ["x = 3", "x = 10", "x = 1", "x = 7"],
        answer: 1 // 答案是選項中的第二個（索引为1）
        },
        {
        title: "finiteField小題目4",
        content: "在有限體GF(8)中，計算 6 + 7 的結果是多少？",
        options: ["0", "13", "5", "3"],
        answer: 2 // 答案是選項中的第三個（索引为2）
        },
        {
        title: "finiteField小題目5",
        content: "在有限體GF(9)中，計算 4 × 5 的結果是多少？",
        options: ["20", "0", "8", "1"],
        answer: 2 // 答案是選項中的第三個（索引为2）
        }
    ],
    AES: [
        {
            title: "AES理論1",
            content: "AES 使用哪種密鑰長度？",
            options: ["64 bits", "128 bits", "256 bits", "512 bits"],
            answer: 2 // 答案是選項中的第三個（索引为2）
        },
        {
            title: "AES理論2",
            content: "在AES加密過程中，明文被分為多少位元組的區塊？",
            options: ["64 bits", "128 bits", "256 bits", "512 bits"],
            answer: 1 // 答案是選項中的第三個（索引为2）
        },
        {
            title: "AES理論3",
            content: "AES加密中，密文的長度是多少？",
            options: ["與明文相同", "取決於金鑰長度", "固定為128 bits", "取決於加密模式"],
            answer: 2 // 答案是選項中的第三個（索引为2）
        },
        {
            title: "AES理論4",
            content: "在AES加密過程中，該算法的循環次數是多少？",
            options: ["10", "12", "14", "16"],
            answer: 2 // 答案是選項中的第三個（索引为2）
        },
        {
            title: "AES理論5",
            content: "AES有幾種不同的加密模式？",
            options: ["3", "4", "5", "6"],
            answer: 1 // 答案是選項中的第三個（索引为2）
        }
    ]
    // 添加其他主题...
};

let lastQuestionIndex = {}; // 用於追蹤上一個顯示問題的索引

function selectCategory(category) {
    const selectedCategory = categories[category];
    if (selectedCategory) {
        lastSelectedCategory = category;
        lastQuestionIndex[category] = lastQuestionIndex[category] || 0; // 初始化索引

        // Display question, update UI, etc.
        const questionIndex = lastQuestionIndex[category];
        const selectedQuestion = selectedCategory[questionIndex];
        displayQuestion(selectedQuestion);

        // Update the question index
        lastQuestionIndex[category]++;
        if (lastQuestionIndex[category] >= selectedCategory.length) {
            // Reset index if it exceeds the number of questions
            lastQuestionIndex[category] = 0;
        }
    }
}






function displayQuestion(question) {
    const questionTitle = document.getElementById('questionTitle');
    const questionContent = document.getElementById('questionContent');
    const answers = document.getElementById('answers');
    const result = document.getElementById('result');

    questionTitle.innerText = question.title;
    questionContent.innerText = question.content;
    result.innerText = "";

    const options = question.options;
    let optionsHTML = "";
    for (let i = 0; i < options.length; i++) {
        optionsHTML += `<input type="radio" id="option${i}" name="options" value="${i}">
                        <label for="option${i}">${options[i]}</label><br>`;
    }
    answers.innerHTML = optionsHTML;

    document.getElementById('questionArea').style.display = 'block';
}

function checkAnswer() {
    const options = document.getElementsByName('options');
    let selectedOption;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = parseInt(options[i].value);
            break;
        }
    }

    const questionTitle = document.getElementById('questionTitle').innerText;
    const currentCategory = questionTitle; // 設置 currentCategory 為問題標題

    const selectedCategory = Object.values(categories).find(category => {
        return category.some(question => question.title === questionTitle);
    });

    if (!selectedCategory) {
        console.error("Selected category not found.");
        return;
    }

    const currentQuestion = selectedCategory.find(question => question.title === questionTitle);
    const correctAnswerIndex = currentQuestion.answer;

    const result = document.getElementById('result');
    if (selectedOption === correctAnswerIndex) {
        result.innerText = "回答正确！即將進入下一題";
        setTimeout(() => {
            result.innerText = ""; // 清空结果信息
            selectCategory(lastSelectedCategory); // 在回答正确后重新选择同一类别的题目
        }, 1000);
    } else {
        result.innerText = "回答错误，再试一次。";
    }
}
