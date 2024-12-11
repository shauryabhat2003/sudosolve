// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/sudoku-gen/dist/constants/base-layout.constant.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_LAYOUT = void 0;
exports.BASE_LAYOUT = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80],
];

},{}],"node_modules/sudoku-gen/dist/constants/difficulty-levels.constant.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIFFICULTY_LEVELS = void 0;
const DIFFICULTY_RECORD = {
    easy: undefined,
    medium: undefined,
    hard: undefined,
    expert: undefined,
};
exports.DIFFICULTY_LEVELS = Object.keys(DIFFICULTY_RECORD);

},{}],"node_modules/sudoku-gen/dist/utils/helper/get-random-item.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomItem = void 0;
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
exports.getRandomItem = getRandomItem;

},{}],"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-0.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLayout0 = void 0;
const rotateLayout0 = (layout) => layout;
exports.rotateLayout0 = rotateLayout0;

},{}],"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-180.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLayout180 = void 0;
const rotateLayout180 = (layout) => layout.map((row) => [...row].reverse()).reverse();
exports.rotateLayout180 = rotateLayout180;

},{}],"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-270.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLayout270 = void 0;
const rotateLayout270 = (layout) => layout[0].map((_row, index) => layout.map((row) => [...row].reverse()[index]));
exports.rotateLayout270 = rotateLayout270;

},{}],"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-90.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLayout90 = void 0;
const rotateLayout90 = (layout) => layout[0].map((_row, index) => layout.map((row) => row[index]).reverse());
exports.rotateLayout90 = rotateLayout90;

},{}],"node_modules/sudoku-gen/dist/utils/layout/rotate-layout.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLayout = void 0;
const get_random_item_util_1 = require("../helper/get-random-item.util");
const rotate_layout_0_util_1 = require("./rotate-layout-0.util");
const rotate_layout_180_util_1 = require("./rotate-layout-180.util");
const rotate_layout_270_util_1 = require("./rotate-layout-270.util");
const rotate_layout_90_util_1 = require("./rotate-layout-90.util");
const rotateLayout = (layout) => (0, get_random_item_util_1.getRandomItem)([rotate_layout_0_util_1.rotateLayout0, rotate_layout_90_util_1.rotateLayout90, rotate_layout_180_util_1.rotateLayout180, rotate_layout_270_util_1.rotateLayout270])(layout);
exports.rotateLayout = rotateLayout;

},{"../helper/get-random-item.util":"node_modules/sudoku-gen/dist/utils/helper/get-random-item.util.js","./rotate-layout-0.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-0.util.js","./rotate-layout-180.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-180.util.js","./rotate-layout-270.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-270.util.js","./rotate-layout-90.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-90.util.js"}],"node_modules/sudoku-gen/dist/utils/layout/get-layout-bands.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayoutBands = void 0;
const getLayoutBands = (layout) => [
    [layout[0], layout[1], layout[2]],
    [layout[3], layout[4], layout[5]],
    [layout[6], layout[7], layout[8]],
];
exports.getLayoutBands = getLayoutBands;

},{}],"node_modules/sudoku-gen/dist/utils/helper/sort-random.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortRandom = void 0;
const sortRandom = () => (Math.random() < 0.5 ? 1 : -1);
exports.sortRandom = sortRandom;

},{}],"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-bands.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleLayoutBands = void 0;
const get_layout_bands_util_1 = require("./get-layout-bands.util");
const sort_random_util_1 = require("../helper/sort-random.util");
const shuffleLayoutBands = (layout) => (0, get_layout_bands_util_1.getLayoutBands)(layout).sort(sort_random_util_1.sortRandom).flat();
exports.shuffleLayoutBands = shuffleLayoutBands;

},{"./get-layout-bands.util":"node_modules/sudoku-gen/dist/utils/layout/get-layout-bands.util.js","../helper/sort-random.util":"node_modules/sudoku-gen/dist/utils/helper/sort-random.util.js"}],"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-rows.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleLayoutRows = void 0;
const get_layout_bands_util_1 = require("./get-layout-bands.util");
const sort_random_util_1 = require("../helper/sort-random.util");
const shuffleLayoutRows = (layout) => (0, get_layout_bands_util_1.getLayoutBands)(layout)
    .map((rows) => rows.sort(sort_random_util_1.sortRandom))
    .flat();
exports.shuffleLayoutRows = shuffleLayoutRows;

},{"./get-layout-bands.util":"node_modules/sudoku-gen/dist/utils/layout/get-layout-bands.util.js","../helper/sort-random.util":"node_modules/sudoku-gen/dist/utils/helper/sort-random.util.js"}],"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-columns.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleLayoutColumns = void 0;
const rotate_layout_270_util_1 = require("./rotate-layout-270.util");
const rotate_layout_90_util_1 = require("./rotate-layout-90.util");
const shuffle_layout_rows_util_1 = require("./shuffle-layout-rows.util");
const shuffleLayoutColumns = (layout) => (0, rotate_layout_270_util_1.rotateLayout270)((0, shuffle_layout_rows_util_1.shuffleLayoutRows)((0, rotate_layout_90_util_1.rotateLayout90)(layout)));
exports.shuffleLayoutColumns = shuffleLayoutColumns;

},{"./rotate-layout-270.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-270.util.js","./rotate-layout-90.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-90.util.js","./shuffle-layout-rows.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-rows.util.js"}],"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-stacks.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleLayoutStacks = void 0;
const rotate_layout_270_util_1 = require("./rotate-layout-270.util");
const rotate_layout_90_util_1 = require("./rotate-layout-90.util");
const shuffle_layout_bands_util_1 = require("./shuffle-layout-bands.util");
const shuffleLayoutStacks = (layout) => (0, rotate_layout_270_util_1.rotateLayout270)((0, shuffle_layout_bands_util_1.shuffleLayoutBands)((0, rotate_layout_90_util_1.rotateLayout90)(layout)));
exports.shuffleLayoutStacks = shuffleLayoutStacks;

},{"./rotate-layout-270.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-270.util.js","./rotate-layout-90.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout-90.util.js","./shuffle-layout-bands.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-bands.util.js"}],"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleLayout = void 0;
const shuffle_layout_bands_util_1 = require("./shuffle-layout-bands.util");
const shuffle_layout_columns_util_1 = require("./shuffle-layout-columns.util");
const shuffle_layout_rows_util_1 = require("./shuffle-layout-rows.util");
const shuffle_layout_stacks_util_1 = require("./shuffle-layout-stacks.util");
const shuffleLayout = (layout) => (0, shuffle_layout_columns_util_1.shuffleLayoutColumns)((0, shuffle_layout_rows_util_1.shuffleLayoutRows)((0, shuffle_layout_stacks_util_1.shuffleLayoutStacks)((0, shuffle_layout_bands_util_1.shuffleLayoutBands)(layout))));
exports.shuffleLayout = shuffleLayout;

},{"./shuffle-layout-bands.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-bands.util.js","./shuffle-layout-columns.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-columns.util.js","./shuffle-layout-rows.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-rows.util.js","./shuffle-layout-stacks.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout-stacks.util.js"}],"node_modules/sudoku-gen/dist/utils/layout/get-layout.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayout = void 0;
const rotate_layout_util_1 = require("./rotate-layout.util");
const shuffle_layout_util_1 = require("./shuffle-layout.util");
const getLayout = (baseLayout) => (0, shuffle_layout_util_1.shuffleLayout)((0, rotate_layout_util_1.rotateLayout)(baseLayout));
exports.getLayout = getLayout;

},{"./rotate-layout.util":"node_modules/sudoku-gen/dist/utils/layout/rotate-layout.util.js","./shuffle-layout.util":"node_modules/sudoku-gen/dist/utils/layout/shuffle-layout.util.js"}],"node_modules/sudoku-gen/dist/utils/seed/get-seeds-by-difficulty.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeedsByDifficulty = void 0;
const getSeedsByDifficulty = (seeds, difficulty) => seeds.filter((seed) => !difficulty || seed.difficulty === difficulty);
exports.getSeedsByDifficulty = getSeedsByDifficulty;

},{}],"node_modules/sudoku-gen/dist/utils/seed/get-seed.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeed = void 0;
const get_random_item_util_1 = require("../helper/get-random-item.util");
const get_seeds_by_difficulty_util_1 = require("./get-seeds-by-difficulty.util");
const getSeed = (seeds, difficulty) => (0, get_random_item_util_1.getRandomItem)((0, get_seeds_by_difficulty_util_1.getSeedsByDifficulty)(seeds, difficulty));
exports.getSeed = getSeed;

},{"../helper/get-random-item.util":"node_modules/sudoku-gen/dist/utils/helper/get-random-item.util.js","./get-seeds-by-difficulty.util":"node_modules/sudoku-gen/dist/utils/seed/get-seeds-by-difficulty.util.js"}],"node_modules/sudoku-gen/dist/utils/helper/board-to-sequence.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardToSequence = void 0;
const boardToSequence = (board) => board.map((row) => row.join('')).join('');
exports.boardToSequence = boardToSequence;

},{}],"node_modules/sudoku-gen/dist/utils/layout/populate-layout.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateLayout = void 0;
const populateLayout = (layout, sequence) => layout.map((row) => row.map((cell) => sequence[cell]));
exports.populateLayout = populateLayout;

},{}],"node_modules/sudoku-gen/dist/utils/helper/replace-tokens.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceTokens = void 0;
const replaceTokens = (sequence, tokenMap) => sequence
    .split('')
    .map((token) => tokenMap[token] || token)
    .join('');
exports.replaceTokens = replaceTokens;

},{}],"node_modules/sudoku-gen/dist/utils/helper/get-sequence.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSequence = void 0;
const board_to_sequence_util_1 = require("./board-to-sequence.util");
const populate_layout_util_1 = require("../layout/populate-layout.util");
const replace_tokens_util_1 = require("./replace-tokens.util");
const getSequence = (layout, seedSequence, tokenMap) => (0, board_to_sequence_util_1.boardToSequence)((0, populate_layout_util_1.populateLayout)(layout, (0, replace_tokens_util_1.replaceTokens)(seedSequence, tokenMap)));
exports.getSequence = getSequence;

},{"./board-to-sequence.util":"node_modules/sudoku-gen/dist/utils/helper/board-to-sequence.util.js","../layout/populate-layout.util":"node_modules/sudoku-gen/dist/utils/layout/populate-layout.util.js","./replace-tokens.util":"node_modules/sudoku-gen/dist/utils/helper/replace-tokens.util.js"}],"node_modules/sudoku-gen/dist/utils/token/get-token-map.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenMap = void 0;
const sort_random_util_1 = require("../helper/sort-random.util");
const getTokenMap = () => 'abcdefghi'
    .split('')
    .sort(sort_random_util_1.sortRandom)
    .reduce((acc, token, index) => ({
    ...acc,
    [token]: String(index + 1),
}), {});
exports.getTokenMap = getTokenMap;

},{"../helper/sort-random.util":"node_modules/sudoku-gen/dist/utils/helper/sort-random.util.js"}],"node_modules/sudoku-gen/dist/constants/seeds.constant.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEEDS = void 0;
exports.SEEDS = [
    {
        puzzle: 'g--d--caf---g----ii-f--hg-bb-iaedhgc--afcg--d-g-b-----f-d--abc---b------c--h-bfia',
        solution: 'gbhdiecafacegbfdhiidfcahgebbfiaedhgcehafcgibddgcbhiafefidegabchhabifcedgceghdbfia',
        difficulty: 'easy',
    },
    {
        puzzle: 'bf-hiac-g-gi------a-hf-g---g-a-fi--ddef---i-b--b-a-g-ff---gbh--hac---------e-cfd-',
        solution: 'bfdhiacegegicbdafhachfegdbighabfiecddefgchiabcibdaeghffdeagbhichacidfbgeibgehcfda',
        difficulty: 'easy',
    },
    {
        puzzle: 'hgad-e--b-cbf-ge---df-aih-----i-------d-ecai-g---fa----igadf----fe-i-----h-eg-fd-',
        solution: 'hgadceifbicbfhgeadedfbaihcgcahibdgeffbdgecaihgeihfadbcbigadfchedfecihbgaahcegbfdi',
        difficulty: 'easy',
    },
    {
        puzzle: '-fbe-c----e-----a---g-ihb--gb-fhdc-eid-g-eahbch-----f-----ef-ga-g----e-i--hi-----',
        solution: 'afbegcidhheidfbgacdcgaihbefgbafhdcieidfgceahbchebaidfgbidcefhgafgchdaebieahibgfcd',
        difficulty: 'easy',
    },
    {
        puzzle: 'c--d-fgeb---g--i-hg-ih--da-a-g-b-cde-edc--a--b--------i-e-cd-ha-fb-h-e-ch--e-----',
        solution: 'cahdifgebedfgabichgbihecdafahgfbicdefedcghabibicadehfgigebcdfhadfbihaegchcaefgbid',
        difficulty: 'easy',
    },
    {
        puzzle: 'bi---ec--eg--h-fbdf--------i-hba-dfe----ehbig--bf-d-h--f-e-a-c-----g-e--cde--f--a',
        solution: 'bidgfecahegcahifbdfhadcbgeiichbagdfedafcehbiggebfidahchfgedaicbabihgcedfcdeibfhga',
        difficulty: 'easy',
    },
    {
        puzzle: '-----ef-ha--bf--ecfe-gc---a----gbch--a--df-b--bi----f-h-af-gidbdf----g--i--c--ha-',
        solution: 'bicdaefghahgbfidecfedgchbiaedfagbchicahidfebggbiehcafdhcafegidbdfbhiagceigecbdhaf',
        difficulty: 'easy',
    },
    {
        puzzle: '--fg--hec-ebc-------h-dfgabb--h-a-fg-g-df-i--f-a---b--hf----ad---if----hc-ea---bi',
        solution: 'dafgbihecgebcahdifichedfgabbidhcaefgegcdfbihafhaigebcdhfgbicadeabifedcghcdeahgfbi',
        difficulty: 'easy',
    },
    {
        puzzle: '-----b-f-e-aih----bi----a----e---i---g-bf--a-----cihg-ic-fdhg-a--h---f-cgef-iad-b',
        solution: 'dhcgabefiefaihcbdgbigdefachcaehgdibfhgibfecadfbdacihgeicbfdhgeaadhebgficgefciadhb',
        difficulty: 'easy',
    },
    {
        puzzle: 'e--f-b-------eid-f--h----b-ge-c-fadhab-ihgfe-hc--d----d-g---cf---eg--h-bf---i----',
        solution: 'edcfgbihabgaheidcfifhdcaebggeicbfadhabdihgfechcfadebgidigbahcfecaegfdhibfhbeicgad',
        difficulty: 'easy',
    },
    {
        puzzle: 'g-hedcf---i-f--a--e--a-----c--i-deh-i-------g--g--e---a----f--c-cf-e-gi-b-------e',
        solution: 'gahedcfbidicfbgaehefbaihcgdcbaigdehfihebfadcgfdghceiabaeighfbdchcfdebgiabgdcaihfe',
        difficulty: 'medium',
    },
    {
        puzzle: '-di--ac---b-cid-h---h--b-d-----f----h-d----fca---c-i--d----i-e-bh---cd-g-g---fac-',
        solution: 'fdighacbeebgcidfhacahfebgdigecifhbadhidabgefcafbdceighdcabgihefbhfeacdigigehdfacb',
        difficulty: 'medium',
    },
    {
        puzzle: '--ac-i------ah-d---e----i---a-e-bc----g--f--ad---gae--ig-fa------hd-e-g-c-d-b----',
        solution: 'hdaceigfbbifahgdcegecbfdiahfaiedbchgehgicfbdadcbhgaeifigefachbdabhdiefgccfdgbhaei',
        difficulty: 'medium',
    },
    {
        puzzle: 'fg----i---h--f-e--e-bd--afh-f--hg--ic------b----f-c-----c-------eiac-gdf-b-----e-',
        solution: 'fgaebhicdihdcfaegbecbdgiafhdfebhgcaicahidefbgbigfacdhegdchefbiaheiacbgdfabfgidhec',
        difficulty: 'medium',
    },
    {
        puzzle: '--d-g-fi---e-ci-d-a----eg-----i---f---bg--ec-e--d--haig----f----ha--------ch-g-e-',
        solution: 'cbdaghfiehgefciadbaifbdeghcdahiecbfgifbghaecdecgdfbhaigeicafdbhbhaeidcgffdchbgiea',
        difficulty: 'medium',
    },
    {
        puzzle: '----d-a---a-ie---di------h-d-e--cg-b-b-e--i----c-i--dh--h-gf--c------b-g--i-ce-a-',
        solution: 'ehfcdgabicabiehfgdigdfbachediehacgfbhbgefdicaafcgibedhbehagfdicfcadhibeggdibcehaf',
        difficulty: 'medium',
    },
    {
        puzzle: '---cfa-ibf---i-------g---f--i--h-cd-gdf--------cd--fb-------bc--gb---dhi---he--g-',
        solution: 'dhecfagibfbgeidhaccaigbhefdbiafhecdggdfbaciehhecdgifbaafhidgbceegbacfdhiicdhebagf',
        difficulty: 'medium',
    },
    {
        puzzle: 'a------g-b--di-a-f--e--ahi----a------bae--------ichbaei---de------c-igd-d-h----ci',
        solution: 'aidhefcgbbhgdicaeffcebgahidheiabgdfccbaefdihggdfichbaeiacgdefbhefbchigdadghfabeci',
        difficulty: 'medium',
    },
    {
        puzzle: '----g-------ci--bg-i-de-af-------beh-----fgdi---eb-f----ah--ig---hg-d---cd--a----',
        solution: 'hacfgbdieefdciahbggibdehafcagfidcbehbceahfgdidhiebgfcafbahceigdiehgfdcabcdgbaiehf',
        difficulty: 'medium',
    },
    {
        puzzle: 'gfbc---dh-a-------d--a--fi--daifc--ech------f-------c-f---e--b---d-----i--igh-d--',
        solution: 'gfbcieadhiahbdfcegdceaghfibbdaifcghechgebdiafeifhagbcdfgcdeihbahbdfcaegiaeighbdfc',
        difficulty: 'medium',
    },
    {
        puzzle: '-e-fh--a-g----ed---a--b-f---ih----dc--------a----g----b---i---dhc-gf-----g------e',
        solution: 'debfhciagghfiaedcbcaidbgfehaihbefgdcfbgcdiehaedchgabifbfaeihcgdhcegfdabiigdacbhfe',
        difficulty: 'hard',
    },
    {
        puzzle: '----i-b---fc--a-h-eb----i-fcieg--ad---hd-e----d--a----f---b-e-i-------b--h--e----',
        solution: 'hageifbcdifcbdagheebdchgiafciegfbadhaghdcefibbdfiahcegfcahbdegideifgchbaghbaeidfc',
        difficulty: 'hard',
    },
    {
        puzzle: '-------hg-----h-d-a-g---ei--ce--dg--dbf---------bfid--hg---f----d--h---c--a-eg---',
        solution: 'bedfiachgficeghbdaahgdbceificehadgfbdbfgceiahgahbfidcehgbcdfaeiediahbfgccfaieghbd',
        difficulty: 'hard',
    },
    {
        puzzle: 'h---f------------i--e---a-h-dhe---a---fh-b----i--c---gf-ga-di--a-i---d-bce------a',
        solution: 'hgcifabdedabgehfciifebdcaghbdheigcafgcfhabeideiadcfhbgfbgahdiecahicgedfbcedfbigha',
        difficulty: 'hard',
    },
    {
        puzzle: 'f----dha----b------a------dic---h------c--egb-----------a-----ed--f-ec-g-fg------',
        solution: 'febigdhachdcbfageigaiehcbfdicegbhadfahfcdiegbbgdaefichcbadigfhedihfaecbgefghcbdia',
        difficulty: 'hard',
    },
    {
        puzzle: 'c-a---i---b--c--ede----g--c-e---dga--c---b--i--gf-----b-----ei------a-cg--ie----a',
        solution: 'cfahdeigbgbhacifedeidbfgahchebcidgafacfgebhdiidgfahcbebacdgfeihfheibadcgdgiehcbfa',
        difficulty: 'hard',
    },
    {
        puzzle: '--a-i---cc-g-------h--e--a--a---ib---d--f--h-----------i---d-f------g-c-dg---b--h',
        solution: 'beagifhdccfghdaibeihdbecfaghafcgibedgdbafechiecidbhagfaihecdgfbfbeihgdcadgcfabeih',
        difficulty: 'hard',
    },
    {
        puzzle: 'i--f--ec------a-fbg-b-i---h-d---ihg-----b---fe---a------d-----i---ie-b-------g---',
        solution: 'iahfdbecgdcehgaifbgfbeicdahbdacfihgechgdbeaifeifgahcbdhbdacfgeifgciedbhaaeibhgfdc',
        difficulty: 'hard',
    },
    {
        puzzle: '--e---c------i--g-------d-hbaf--------cfhe--ie------f-h-d-c-----f-h----c---i-ga--',
        solution: 'fdegbhciaacheidfgbibgcfadehbafdgihcedgcfhebaiehibacgfdhidacfebggfahebidccebidgahf',
        difficulty: 'hard',
    },
    {
        puzzle: '--f-d-i---g--b-a-d--c-a-----c-i---e---eh--g---------ac---------b---i-e----gf--d--',
        solution: 'abfcdhigehgiebfacddecgaibhfgcdifahebfaehcbgdiihbdegfacefabgdcihbdhaicefgcigfhedba',
        difficulty: 'hard',
    },
    {
        puzzle: '-ica------------bh----g--f--g---a---i-e----c-a---f------d--bg------c---e-fg----id',
        solution: 'ficabhdeggeaidfcbhdhbegcifabgfceahdiidebhgacfachdfiegbeadfibghchbigcdfaecfghaebid',
        difficulty: 'expert',
    },
    {
        puzzle: '-h-i------i---------f--bh--b---a--ed-ca------i--f---h--------c----he--f-ab--df---',
        solution: 'ehbicdgafdigafhcbecafegbhdibghcaifedfcadheigbiedfbgahchfebiadcggdihecbfaabcgdfeih',
        difficulty: 'expert',
    },
    {
        puzzle: '-h--c-f-ice-------b--ia--------g-h------e---ff--h---i----b---eh----------ga--f--c',
        solution: 'ahgdcefbiceigfbahdbfdiahcgediefgchabgbhaeidcffachbdeigicfbdagehedbchgifahgaeifbdc',
        difficulty: 'expert',
    },
    {
        puzzle: 'a----db---g-c----f--e-f--i---------i----h-f-d--g---ch---b--e-c-ca------h-d-------',
        solution: 'afchidbegigdcebhafhbegfadicfehdgcabibcaehifgddigbafcheghbfdeicacafibgedhediachgfb',
        difficulty: 'expert',
    },
    {
        puzzle: '------c--g-b--a---------g-h---e----gb--id-----i-f---eb----i---c-he-f-d--a------h-',
        solution: 'edhbgicfagfbchaeidicadefgbhhafebcidgbegidhacfdicfaghebfgdhiebaccheafbdgiabigcdfhe',
        difficulty: 'expert',
    },
    {
        puzzle: '---bf-i-------hc-aa----------g------h--c-e----i----bh----f---g--f-----e---hig-a--',
        solution: 'chebfaidgfgdeihcbaabidcgefhbeghdifachafcbegiddicgafbheicafedhgbgfbahcdeiedhigbacf',
        difficulty: 'expert',
    },
    {
        puzzle: '--c-----d---g-i--h-i----b--ace------d--bh----b--f---------e---------bea--d--a--c-',
        solution: 'gecabhifdfbagdicehhidefcbgaaceigdhbfdgfbheaicbhifcagdeiagcefdhbcfhdibeagedbhagfci',
        difficulty: 'expert',
    },
    {
        puzzle: '-----d-h--h-----a-gb------i-----a--g----eh-c--i--d-----ge---a--d----f-----ab--i--',
        solution: 'iacefdghbehdgibcafgbfhacedicehfbadigfdgiehbcaaibcdgfehbgedhiafcdciagfhbehfabceigd',
        difficulty: 'expert',
    },
    {
        puzzle: '-bi-------c----e---------af---eba-----a-i-g------c--i----h-e--d-e------gc-b--f---',
        solution: 'fbiaegdhcachdfbegiedgchibafgicebafdhbhafidgcedfegchaibiafhgecbdhedbacifgcgbidfhea',
        difficulty: 'expert',
    },
    {
        puzzle: '---i--h-bc----b----g----a----gd-----e--h-f------b---ac-c------ha-----id--i--gd---',
        solution: 'deficahgbchagfbdeibgiedhacffagdicbheebchafgididhbegfacgcdabiefhafbcheidghiefgdcba',
        difficulty: 'expert',
    },
];

},{}],"node_modules/sudoku-gen/dist/utils/validate/validate-difficulty.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDifficulty = void 0;
const difficulty_levels_constant_1 = require("../../constants/difficulty-levels.constant");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validateDifficulty = (difficulty) => difficulty_levels_constant_1.DIFFICULTY_LEVELS.includes(difficulty);
exports.validateDifficulty = validateDifficulty;

},{"../../constants/difficulty-levels.constant":"node_modules/sudoku-gen/dist/constants/difficulty-levels.constant.js"}],"node_modules/sudoku-gen/dist/utils/get-sudoku.util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSudoku = void 0;
const base_layout_constant_1 = require("../constants/base-layout.constant");
const difficulty_levels_constant_1 = require("../constants/difficulty-levels.constant");
const get_layout_util_1 = require("./layout/get-layout.util");
const get_seed_util_1 = require("./seed/get-seed.util");
const get_sequence_util_1 = require("./helper/get-sequence.util");
const get_token_map_util_1 = require("./token/get-token-map.util");
const seeds_constant_1 = require("../constants/seeds.constant");
const validate_difficulty_util_1 = require("./validate/validate-difficulty.util");
const getSudoku = (difficulty) => {
    if (difficulty && !(0, validate_difficulty_util_1.validateDifficulty)(difficulty)) {
        throw new Error(`Invalid difficulty, expected one of: ${difficulty_levels_constant_1.DIFFICULTY_LEVELS.join(', ')}`);
    }
    const seed = (0, get_seed_util_1.getSeed)(seeds_constant_1.SEEDS, difficulty);
    const layout = (0, get_layout_util_1.getLayout)(base_layout_constant_1.BASE_LAYOUT);
    const tokenMap = (0, get_token_map_util_1.getTokenMap)();
    const puzzle = (0, get_sequence_util_1.getSequence)(layout, seed.puzzle, tokenMap);
    const solution = (0, get_sequence_util_1.getSequence)(layout, seed.solution, tokenMap);
    return {
        puzzle,
        solution,
        difficulty: seed.difficulty,
    };
};
exports.getSudoku = getSudoku;

},{"../constants/base-layout.constant":"node_modules/sudoku-gen/dist/constants/base-layout.constant.js","../constants/difficulty-levels.constant":"node_modules/sudoku-gen/dist/constants/difficulty-levels.constant.js","./layout/get-layout.util":"node_modules/sudoku-gen/dist/utils/layout/get-layout.util.js","./seed/get-seed.util":"node_modules/sudoku-gen/dist/utils/seed/get-seed.util.js","./helper/get-sequence.util":"node_modules/sudoku-gen/dist/utils/helper/get-sequence.util.js","./token/get-token-map.util":"node_modules/sudoku-gen/dist/utils/token/get-token-map.util.js","../constants/seeds.constant":"node_modules/sudoku-gen/dist/constants/seeds.constant.js","./validate/validate-difficulty.util":"node_modules/sudoku-gen/dist/utils/validate/validate-difficulty.util.js"}],"node_modules/sudoku-gen/dist/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSudoku = void 0;
var get_sudoku_util_1 = require("./utils/get-sudoku.util");
Object.defineProperty(exports, "getSudoku", { enumerable: true, get: function () { return get_sudoku_util_1.getSudoku; } });

},{"./utils/get-sudoku.util":"node_modules/sudoku-gen/dist/utils/get-sudoku.util.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _sudokuGen = require("sudoku-gen");
// Import the sudoku-gen package

var numSelected = null;
var tileSelected = null;
var errors = 0;

// Generating puzzle and solution using the sudoku-gen package
var _getSudoku = (0, _sudokuGen.getSudoku)('easy'),
  puzzle = _getSudoku.puzzle,
  solution = _getSudoku.solution;

// Converting the puzzle string to a 2D array format for easier processing
var board = Array.from({
  length: 9
}, function (_, i) {
  return puzzle.slice(i * 9, (i + 1) * 9).split("").map(function (char) {
    return char === "-" ? "-" : char;
  });
});
window.onload = function () {
  setGame();
};
function setGame() {
  for (var i = 1; i <= 9; i++) {
    var number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // BOARD: 9x9
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      var tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[r][c] !== "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if (r === 2 || r === 5) {
        tile.classList.add("horizontal-line");
      }
      if (c === 2 || c === 5) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }

  // Adding a Solve button
  var solveButton = document.createElement("button");
  solveButton.id = "solve-button";
  solveButton.innerText = "Solve";
  solveButton.addEventListener("click", solveSudoku);
  document.body.appendChild(solveButton);
}
function selectNumber() {
  if (numSelected !== null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}
function selectTile() {
  if (numSelected) {
    if (this.innerText !== "") {
      return;
    }
    var coords = this.id.split("-");
    var r = parseInt(coords[0]);
    var c = parseInt(coords[1]);

    // Checking the solution by comparing the selected number to the solution
    if (solution[r * 9 + c] === numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      errors += 1;
      document.getElementById("errors").innerText = errors;
    }
  }
}
function solveSudoku() {
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      var tile = document.getElementById(r.toString() + "-" + c.toString());
      tile.innerText = solution[r * 9 + c];
    }
  }
}
},{"sudoku-gen":"node_modules/sudoku-gen/dist/index.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54093" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map