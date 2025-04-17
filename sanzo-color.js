/**
 * Sanzo Color Toolbox
 * 
 * This toolbox is designed to return colors and color combinations inspired by the work of Sanzo Wada, specifically 
 * "A Dictionary of Color Combinations vol. 2," published by Seigensha. All color combinations and their corresponding 
 * names are directly sourced from this book, and the author of this module asserts that he has no authorship or 
 * ownership of these combinations or names.
 * 
 * The book features 72 combinations based on images representing the Japanese four seasons, with each combination 
 * containing between 3 to 7 colors. Additionally, it includes 161 examples of color combinations that reflect the 
 * design aesthetics of the early Showa Era.
 */


// Redish colors directly from the book - page 234 - 239
const redish = [
    {name: 'Pale Purplish Vinaceous', CMYK: [0, 13,  8, 0], combinations: [36, 207, 212]},
    {name: 'Hermosa Pink',          CMYK: [0, 30,  6, 0], combinations: [4, 20, 49, 90, 115, 132, 203]},
    {name: 'Corinthian Pink',       CMYK: [0, 35, 15, 0], combinations: [27, 48, 66, 79, 82, 85, 94, 230, 231]},
    {name: 'Cameo Pink',            CMYK: [10, 32, 19, 0], combinations: [14, 30, 62, 213, 227]},
    {name: 'Pale Cinnamon-Pink',     CMYK: [3, 12, 19, 0], combinations: [43, 178, 183]},
    {name: 'Fawn',                   CMYK: [18, 31, 30, 0], combinations: [11, 24, 27, 28, 60, 71]},
    {name: 'Pale Ecru-Drab',         CMYK: [23, 25, 27, 0], combinations: [46, 49]},
    {name: 'Light Brown Drab',       CMYK: [8, 30, 20, 25], combinations: [35, 54, 104, 203, 228]},
    {name: 'Coral Red',              CMYK: [0, 55, 40, 0], combinations: [47, 111, 117, 119, 150, 162, 164, 176, 187, 214, 219]},
    {name: 'Fresh Color',            CMYK: [0, 53, 45, 0], combinations: [15, 35, 56, 227]},
    {name: 'Grenadine Pink',         CMYK: [0, 62, 58, 0], combinations: [27, 78, 131, 186, 220]},
    {name: 'Eosine Pink',            CMYK: [0, 63, 23, 0], combinations: [24, 25, 28, 38, 80, 104, 108, 145, 152, 216, 220, 233]},
    {name: 'Spinel Red',             CMYK: [0, 70, 21, 0], combinations: [11, 21, 109, 134, 192, 218]},
    {name: 'Old Rose',               CMYK: [15, 70, 40, 0], combinations: [4, 6, 36, 84, 94, 156, 163]},
    {name: 'Eugenia Red',            CMYK: [7, 76, 60, 0], combinations: [18, 24, 82, 102, 191, 229, 232]},
    {name: 'Eugenia Red Bis',        CMYK: [0, 80, 50, 10], combinations: [10, 47, 88, 113, 208, 213]},
    {name: 'Raw Sienna',             CMYK: [18, 58, 100, 6], combinations: [2, 21, 56]},
    {name: 'Vinaceous Tawny',        CMYK: [17, 72, 100, 6], combinations: [99, 180]},
    {name: 'Jasper Red',             CMYK: [2, 83, 100, 0], combinations: [69, 72, 96, 103, 158]},
    {name: 'Spectrum Red',           CMYK: [5, 100, 100, 0], combinations: [5, 11, 38, 53, 66, 95, 113, 115, 137, 138, 149, 159, 173, 185, 210]},
    {name: 'Red Orange',             CMYK: [9, 90, 100, 0], combinations: [57, 64, 75, 97, 100, 101, 114, 128, 145, 148, 167, 176, 227]},
    {name: 'Etruscan Red',           CMYK: [16, 80, 74, 6], combinations: [65, 153]},
    {name: 'Burnt Sienna',           CMYK: [22, 76, 100, 15], combinations: [4, 177, 178]},
    {name: 'Ocher Red',              CMYK: [18, 73, 63, 20], combinations: []},
    {name: 'Scarlet',                CMYK: [10, 95, 72, 7], combinations: [15, 79, 161, 183, 205]},
    {name: 'Carmine',                CMYK: [0, 100, 75, 16], combinations: [136, 181, 193]},
    {name: 'Indian Lake',            CMYK: [12, 89, 35, 9], combinations: [11, 60, 68, 135, 143, 203]},
    {name: 'Rosolanc Purple',        CMYK: [30, 90, 33, 0], combinations: [45, 92, 106, 121, 204]},
    {name: 'Pomegranate Purple',     CMYK: [23, 100, 50, 6], combinations: [35, 63, 104, 123, 124, 133, 171, 189, 209]},
    {name: 'Hydrangea Red',          CMYK: [38, 90, 70, 0], combinations: [49, 215, 219]},
    {name: 'Brick Red',              CMYK: [22, 84, 100, 18], combinations: [219, 221, 222, 228]},
    {name: 'Carmine Red',            CMYK: [25, 65, 80, 16], combinations: [14, 154, 175]},
    {name: 'Pompeian Red',           CMYK: [18, 97, 74, 19], combinations: [140, 197]},
    {name: 'Red',                    CMYK: [30, 100, 70, 10], combinations: [4, 7, 11, 76, 81, 112, 164]},
    {name: 'Brown',                  CMYK: [35, 74, 90, 35], combinations: [152]},
    {name: 'Hays Russet',            CMYK: [37, 85, 95, 33], combinations: [111, 153]},
    {name: 'Vandyke Red',            CMYK: [32, 95, 95, 33], combinations: [55, 218]},
    {name: 'Pansy Purple',           CMYK: [34, 100, 60, 34], combinations: [27]},
    {name: 'Pale Burnt Lake',        CMYK: [25, 90, 80, 40], combinations: [2]},
    {name: 'Violet Red',             CMYK: [75, 100, 50, 5], combinations: []},
    {name: 'Vistoris Lake',          CMYK: [40, 71, 55, 40], combinations: [10, 28, 34, 58, 77, 99]}
];

// Yellowish colors directly from the book - page 240 - 246
const yellowish = [
    {name: 'Sulphur Yellow',         CMYK: [4,  4, 28, 0], combinations: [1, 21, 26, 40, 55, 63, 68, 104, 112, 117, 132, 134, 148]},
    {name: 'Sea-foam Yellow',        CMYK: [6,  6, 29, 0], combinations: [44, 94]},
    {name: 'Pale Lemon Yellow',      CMYK: [0,  4, 38, 0], combinations: [13, 23, 54, 66, 72, 85, 102, 118, 162, 176, 187, 226]},
    {name: 'Naples Yellow',          CMYK: [2,  7, 44, 0], combinations: [2, 27, 29, 47, 77, 89, 97, 105, 116, 151, 156, 158, 180, 208, 210,  214, 220, 230]},
    {name: 'Ivory Buff',             CMYK: [8, 15, 40, 0], combinations: [5, 12, 19, 43, 56, 64, 81, 87, 89, 114, 135, 137, 114, 164, 223, 227]},
    {name: 'Seashell Pink',          CMYK: [0, 19, 23, 0], combinations: [1, 14, 25, 34, 60, 112, 150, 152, 159, 220]},
    {name: 'Light Pinkish Cinnamon', CMYK: [0, 25, 40, 0], combinations: [2, 4, 59, 74]},
    {name: 'Pinkish Cinnamon',       CMYK: [5, 32, 53, 0], combinations: [2, 14, 66, 98, 125, 206]},
    {name: 'Cinnamon Buff',          CMYK: [0, 25, 57, 0], combinations: [22, 26, 45, 88, 111, 176, 221]},
    {name: 'Cream Yellow',           CMYK: [0, 28, 68, 0], combinations: [42, 91, 93, 154, 165, 201, 231]},
    {name: 'Golden Yellow',          CMYK: [2, 42, 74, 0], combinations: [18, 209]},
    {name: 'Vinaceous Cinnamon',     CMYK: [4, 40, 42, 0], combinations: [17, 33, 81, 88, 96]},
    {name: 'Ochraceous Salmon',      CMYK: [15, 38, 55, 0], combinations: [60, 97, 157, 158, 202]},
    {name: 'Isabella Color',         CMYK: [15, 28, 60, 10], combinations: [84]},
    {name: 'Maple',                  CMYK: [5, 26, 56, 20], combinations: [6, 10, 90, 114, 211, 231]},
    {name: 'Olive Buff',             CMYK: [16, 6, 42, 12], combinations: [15, 33, 50, 84, 140, 145, 221, 226]},
    {name: 'Ecru',                   CMYK: [20, 25, 40, 6], combinations: [3, 82, 86, 90, 100, 112, 212]},
    {name: 'Yellow',                 CMYK: [0, 0, 100, 0], combinations: [20, 66, 104, 120, 132, 139, 140, 166, 206, 222]},
    {name: 'Lemon Yellow',           CMYK: [5, 0, 85, 0], combinations: [33, 108, 138]},
    {name: 'Apricot Yellow',         CMYK: [0, 10, 100, 0], combinations: [6, 107, 130, 167, 171, 196, 194, 224]},
    {name: 'Pyrite Yellow',          CMYK: [23, 25, 80, 0], combinations: [26, 29, 83, 155, 189]},
    {name: 'Olive Ocher',            CMYK: [18, 26, 90, 0], combinations: [18, 68, 163, 197, 215]},
    {name: 'Yellow Ocher',           CMYK: [12, 28, 88, 0], combinations: [9, 67, 73, 131, 147, 175, 185, 192, 225, 232]},
    {name: 'Orange Yellow',          CMYK: [0, 33, 100, 0], combinations: [96, 96, 100, 113, 127, 152, 160, 181, 218, 233]},
    {name: 'Yellow Orange',          CMYK: [0, 45, 100, 0], combinations: [4, 136, 153, 182]},
    {name: 'Apricot Orange',         CMYK: [0, 55, 75, 0], combinations: [60, 76, 94, 122, 166, 183, 200]},
    {name: 'Orange',                 CMYK: [0, 68, 100, 0], combinations: [31, 42, 77, 80, 178, 196, 198]},
    {name: 'Peach Red',              CMYK: [0, 80, 90, 0], combinations: [13, 87, 146, 206, 210, 221]},
    {name: 'English Red',            CMYK: [13, 73, 100, 0], combinations: [9, 30, 118, 156, 184, 195, 199, 231]},
    {name: 'Cinnamon Rufous',        CMYK: [20, 60, 82, 5], combinations: [60, 208]},
    {name: 'Orange Rufous',          CMYK: [18, 65, 100, 8], combinations: [39, 61, 67, 83, 154]},
    {name: 'Sulphine Yellow',        CMYK: [24, 32, 100, 4], combinations: [8, 52, 70, 126, 129, 168, 216, 228]},
    {name: 'Khaki',                  CMYK: [24, 45, 100, 6], combinations: [9, 12, 32, 74, 75, 79, 207, 222]},
    {name: 'Citron Yellow',          CMYK: [35, 17, 95, 0], combinations: [2, 23, 36, 59, 228]},
    {name: 'Citrine',                CMYK: [36, 32, 100, 7], combinations: [2, 7, 29, 220]},
    {name: 'Dull Citrine',           CMYK: [52, 45, 78, 0], combinations: [9, 50, 86, 98, 226]},
    {name: 'Buffy Citrine',          CMYK: [42, 40, 82, 8], combinations: [14, 54, 91]},
    {name: 'Dark Citrine',           CMYK: [38, 34, 67, 20], combinations: [3]},
    {name: 'Light Grayish Olive',    CMYK: [43, 36, 62, 19], combinations: []},
    {name: 'Kronbergs Green',        CMYK: [48, 35, 70, 12], combinations: [8, 187]},
    {name: 'Olive',                  CMYK: [48, 38, 100, 15], combinations: [212]},
    {name: 'Orange Citrine',         CMYK: [28, 48, 92, 24], combinations: [30, 57, 87, 155, 158, 176, 179]},
    {name: 'Sudan Brown',            CMYK: [25, 60, 65, 19], combinations: [15, 71, 151, 212, 217]},
    {name: 'Olive Green',            CMYK: [56, 40, 85, 22], combinations: []},
    {name: 'Light Brownish Olive',    CMYK: [42, 46, 73, 24], combinations: [18, 50, 57]},
    {name: 'Deep Grayish Olive',     CMYK: [50, 48, 78, 37], combinations: []},
    {name: 'Pale Raw Umber',         CMYK: [46, 63, 87, 32], combinations: [93, 125, 153, 210]},
    {name: 'Sepia',                  CMYK: [48, 60, 100, 40], combinations: [41, 72, 150, 164]},
    {name: 'Madder Brown',           CMYK: [36, 88, 100, 38], combinations: [78, 198, 207]},
    {name: 'Mars Brown/Tobacco',     CMYK: [39, 76, 100, 47], combinations: [59, 84, 156, 163, 195, 209]},
    {name: 'Vandyke Brown',          CMYK: [56, 71, 97, 52], combinations: [3, 34, 168, 203, 211, 218, 227]}
];

// Greenish colors directly from the book - page 247 - 250
const greenish = [
    {name: 'Turquoise Green',        CMYK: [29, 0, 24, 0], combinations: [20, 85, 113, 206, 225, 228]},
    {name: 'Glaucous Green',         CMYK: [30, 9, 24, 0], combinations: [1, 59, 63, 86, 92]},
    {name: 'Dark Greenish Glaucous', CMYK: [30, 15, 36, 0], combinations: [51, 68, 112]},
    {name: 'Pale Turtle Green',      CMYK: [25, 10, 45, 0], combinations: [70, 78, 173, 208, 216]},
    {name: 'Yellow Green',           CMYK: [35, 0, 72, 0], combinations: [53, 124, 219]},
    {name: 'Light Green Yellow',     CMYK: [26, 5, 85, 0], combinations: [87, 177, 193, 211]},
    {name: 'Night Green',            CMYK: [52, 0, 100, 0], combinations: [34, 43, 115]},
    {name: 'Olive Yellow',           CMYK: [40, 30, 80, 0], combinations: [24]},
    {name: 'Artemisia Green',        CMYK: [57, 28, 39, 8], combinations: [29, 30, 31, 67, 125, 222, 227]},
    {name: 'Andover Green',          CMYK: [60, 40, 50, 10], combinations: [9, 61]},
    {name: 'Rainette Green',         CMYK: [42, 20, 62, 28], combinations: [152]},
    {name: 'Chromium Green',         CMYK: [50, 16, 58, 20], combinations: [18, 77, 79, 90, 195, 208, 226, 231]},
    {name: 'Pistachio Green',        CMYK: [64, 29, 56, 6], combinations: [51, 92, 128, 148, 161]},
    {name: 'Sea Green',              CMYK: [80, 0, 51, 0], combinations: [40, 151, 165, 172]},
    {name: 'Benzol Green',           CMYK: [100, 15, 55, 0], combinations: [55, 129, 197]},
    {name: 'Light Porcelain Green',   CMYK: [86, 22, 50, 3], combinations: [3, 80, 116, 177, 228]},
    {name: 'Green',                  CMYK: [75, 21, 73, 0], combinations: [13, 22, 88, 89, 96, 99, 102, 107, 127, 210, 211, 218, 224]},
    {name: 'Dull Viridian Green',    CMYK: [90, 20, 80, 0], combinations: [35, 65, 137, 180, 201]},
    {name: 'Oil Green',              CMYK: [53, 28, 100, 8], combinations: [42, 198]},
    {name: 'Grape Green',            CMYK: [41, 25, 74, 0], combinations: [40, 46, 92]},
    {name: 'Diamine Green',          CMYK: [87, 20, 100, 10], combinations: [8, 103, 136, 185]},
    {name: 'Cossack Green',          CMYK: [76, 32, 91, 18], combinations: [53, 70, 174, 177, 199]},
    {name: 'Lincoln Green',          CMYK: [60, 48, 86, 37], combinations: [42, 65]},
    {name: 'Blackish Olive',         CMYK: [56, 32, 63, 55], combinations: [29, 30, 162, 225]},
    {name: 'Deep Slate Olive',       CMYK: [76, 60, 80, 62], combinations: [57, 173]}
];

// Blueish colors directly from the book - page 251 - 254
const blueish = [
    {name: 'Pale Kings Blue',        CMYK: [5,  1,  9, 0], combinations: [46, 69, 93, 169, 170, 176, 202, 204, 205, 206, 225]},
    {name: 'Nile Blue',              CMYK: [25, 0, 10, 0], combinations: [13, 14, 207, 208, 222]},
    {name: 'Pale Kings Blue Bis',    CMYK: [33, 4,  7, 0], combinations: [31, 32, 63, 71, 84, 90, 111, 113, 145, 152, 153, 163, 193, 214, 220, 230]},
    {name: 'Light Glaucous Blue',    CMYK: [35, 10, 14, 0], combinations: [7, 16, 17, 23, 44, 54, 58, 88, 93, 154, 170, 186, 187, 196, 218, 223]},
    {name: 'Salvia Blue',            CMYK: [41, 25, 10, 0], combinations: [33, 72, 105, 151, 189, 217]},
    {name: 'Cobalt Green',           CMYK: [42, 0, 42, 0], combinations: [5, 20, 22, 41, 73, 76, 182, 190, 211]},
    {name: 'Calamine Blue',          CMYK: [50, 0, 20, 0], combinations: [20, 36, 80, 124, 150, 167, 188, 217, 219, 222, 226, 229]},
    {name: 'Venice Green',           CMYK: [58, 0, 30, 0], combinations: [7, 106, 111, 162, 202, 213, 225, 230, 233]},
    {name: 'Pale Methy Blue',        CMYK: [68, 12, 30, 0], combinations: [46, 47, 98, 231]},
    {name: 'Cerulian Blue',          CMYK: [84, 26, 32, 0], combinations: [16, 77, 78, 104, 112, 113, 134, 139, 147, 165, 206]},
    {name: 'Peacock Blue',           CMYK: [100, 19, 43, 0], combinations: [41, 45]},
    {name: 'Green Blue',             CMYK: [82, 24, 40, 3], combinations: [144, 166, 168, 169, 183, 232]},
    {name: 'Olympic Blue',           CMYK: [69, 44, 10, 0], combinations: [24, 25, 76, 83, 105, 110, 128, 131, 195, 209, 211, 217, 223]},
    {name: 'Blue',                   CMYK: [95, 54, 0, 0], combinations: [51, 52, 74, 103, 111, 212]},
    {name: 'Antwarp Blue',           CMYK: [100, 40, 30, 10], combinations: [81, 82, 87, 100, 115, 120]},
    {name: 'Helvetia Blue',          CMYK: [100, 62, 19, 10], combinations: [16, 21, 37, 86, 129, 158, 196, 216, 233]},
    {name: 'Dark Medici Blue',       CMYK: [70, 45, 45, 15], combinations: [17, 64, 91, 152, 166, 176, 196, 219, 225, 229, 232]},
    {name: 'Dusky Green',            CMYK: [100, 30, 64, 50], combinations: [51, 53, 87, 152, 167, 174, 200]},
    {name: 'Deep Lyons Blue',        CMYK: [100, 85, 15, 6], combinations: [12, 16, 19]},
    {name: 'Violet Blue',            CMYK: [85, 79, 38, 16], combinations: [6, 37, 39, 114, 140, 154, 163, 170, 220]},
    {name: 'Vandar Poels Blue',      CMYK: [100, 73, 43, 10], combinations: [18, 44, 48, 68, 104, 150, 152, 154, 155, 156, 184, 215, 229]},
    {name: 'Dark Tyrian Blue',       CMYK: [90, 66, 36, 50], combinations: [5, 89, 176, 179]},
    {name: 'Dull Violet Black',      CMYK: [100, 90, 38, 50], combinations: [8, 21, 32, 52, 55, 67, 70]},
    {name: 'Deep Indigo',            CMYK: [100, 92, 52, 60], combinations: [9, 13, 17, 38, 58, 61, 214]},
    {name: 'Deep Slate Green',       CMYK: [80, 50, 60, 70], combinations: [14, 30, 31, 36, 205]}
];

// Purplish colors directly from the book - page 255 - 257
const purplish = [
    {name: 'Grayish Lavender',       CMYK: [28, 28, 0, 0], combinations: [16, 19, 62, 90, 191, 206]},
    {name: 'Grayish Lavender Bis',   CMYK: [25, 33, 20, 0], combinations: [1, 6, 16, 23, 39, 151, 159, 207, 215, 230]},
    {name: 'Laelia Pink',            CMYK: [20, 48, 18, 0], combinations: [22, 33, 43, 153, 154, 221, 223]},
    {name: 'Lilac',                  CMYK: [28, 54, 8, 0], combinations: [8, 39, 62]},
    {name: 'Eupatorium Purple',      CMYK: [25, 79, 12, 0], combinations: [15, 81, 82]},
    {name: 'Light Mauve',            CMYK: [43, 62, 5, 0], combinations: []},
    {name: 'Aconite Violet',         CMYK: [39, 68, 5, 0], combinations: [11]},
    {name: 'Dull Blue Violet',       CMYK: [57, 60, 17, 0], combinations: [12]},
    {name: 'Dark Soft Violet',       CMYK: [70, 68, 13, 0], combinations: [16, 88, 119, 223]},
    {name: 'Blue Violet',            CMYK: [72, 80, 0, 0], combinations: [39, 159]},
    {name: 'Violet Ultramarine',     CMYK: [85, 100, 0, 0], combinations: [46, 97]},
    {name: 'Purple Drab',            CMYK: [38, 65, 49, 26], combinations: [25]},
    {name: 'Deep Violet/Plumbeous',  CMYK: [61, 52, 43, 7], combinations: [3, 6, 108, 140, 163, 193]},
    {name: 'Vernonia Purple',        CMYK: [42, 78, 46, 15], combinations: [89]},
    {name: 'Dark Slate Purple',      CMYK: [64, 85, 60, 10], combinations: [106]},
    {name: 'Taupe Brown',            CMYK: [30, 70, 35, 40], combinations: [55]},
    {name: 'Violet Carmine',         CMYK: [64, 90, 70, 10], combinations: [81, 107, 120, 155]},
    {name: 'Violet',                 CMYK: [85, 90, 18, 0], combinations: [138, 231]},
    {name: 'Red Violet',             CMYK: [76, 100, 25, 15], combinations: [142]},
    {name: 'Cotinga Purple',         CMYK: [66, 100, 42, 40], combinations: [15, 49, 160]},
    {name: 'Dusky Madder Violet',    CMYK: [75, 100, 46, 30], combinations: [26, 62, 164]},
    {name: 'Dark Perilla Purple',    CMYK: [77, 95, 85, 20], combinations: [35]},
    {name: 'Dull Purplish Black',    CMYK: [85, 85, 90, 20], combinations: [45, 47, 79, 178, 228]}
];

// Grayish colors directly from the book - page 258 - 259
const grayish = [
    {name: 'White',                  CMYK: [0, 0, 0, 0], combinations: [1, 7, 10, 33, 38, 41, 48, 51, 77, 79, 83, 87, 91, 95, 99, 101, 103, 105, 106, 107, 108, 109, 110, 111, 115, 121, 122, 123, 137, 139, 141, 142, 144, 147, 149, 154, 157, 160, 161, 165, 167, 168, 171, 172, 173, 174, 175, 179, 180, 181, 182, 183, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 209, 211, 212, 216, 224]},
    {name: 'Neutral Gray',           CMYK: [29, 18, 20, 0], combinations: [12, 23, 37, 48, 72, 83, 102, 111, 116, 120, 126, 130, 133, 135, 143, 145, 149, 192, 210, 230, 233]},
    {name: 'Mineral Gray',           CMYK: [33, 18, 25, 7], combinations: [10, 44, 71, 119, 148, 216, 218, 224]},
    {name: 'Warm Gray',              CMYK: [37, 28, 36, 3], combinations: [5, 99, 141, 146, 213, 232]},
    {name: 'Slate Color',            CMYK: [85, 70, 62, 30], combinations: [63, 71, 146, 161]},
    {name: 'Black',                  CMYK: [20, 10, 15, 100], combinations: [5, 64, 69, 73, 75, 76, 78, 81, 82, 83, 85, 92, 93, 95, 101, 102, 103, 108, 109, 110, 115, 116, 117, 118, 121, 122, 123, 124, 125, 126, 127, 128, 130, 131, 133, 139, 141, 142, 143, 144, 145, 147, 149, 154, 156, 157, 165, 180, 181, 184, 185, 186, 187, 188, 189, 191, 194, 197, 199, 201, 202, 208, 209, 212, 213, 215, 216, 217, 218, 219, 222, 223, 229, 231, 232, 233]}
];









// Combine all color arrays into a single colors array
const colors = [...redish, ...yellowish, ...greenish, ...blueish, ...purplish, ...grayish];

// CMYK to RGB conversion tool
function CMYK2RGB(CMYK){
    let dec_CMYK = [CMYK[0]*0.01, CMYK[1]*0.01, CMYK[2]*0.01, CMYK[3]*0.01];
    const RGB = [
        Math.round(255 * (1-dec_CMYK[0]) * (1-dec_CMYK[3])),
        Math.round(255 * (1-dec_CMYK[1]) * (1-dec_CMYK[3])),
        Math.round(255 * (1-dec_CMYK[2]) * (1-dec_CMYK[3]))
    ];
    return RGB
}

// Helper function to create combinations
function createCombinations(combinationsToCheck) {
    return combinationsToCheck.map(combination => {
        const colorsForCombination = colors.filter(color => color.combinations.includes(combination));
        return new Combination(colorsForCombination);
    });
}

// Update month functions to use the helper function
function january() {
    const combinationsToCheck = [1, 2, 3, 4, 5, 6];
    return createCombinations(combinationsToCheck);
}

function february() {
    const combinationsToCheck = [7, 8, 9, 10, 11, 12];
    return createCombinations(combinationsToCheck);
}

function march() {
    const combinationsToCheck = [13, 14, 15, 16, 17, 18];
    return createCombinations(combinationsToCheck);
}

function april() {
    const combinationsToCheck = [19, 20, 21, 22, 23, 24];
    return createCombinations(combinationsToCheck);
}

function may() {
    const combinationsToCheck = [25, 26, 27, 28, 29, 30];
    return createCombinations(combinationsToCheck);
}

function june() {
    const combinationsToCheck = [31, 32, 33, 34, 35, 36];
    return createCombinations(combinationsToCheck);
}

function july() {
    const combinationsToCheck = [37, 38, 39, 40, 41, 42];
    return createCombinations(combinationsToCheck);
}

function august() {
    const combinationsToCheck = [43, 44, 45, 46, 47, 48];
    return createCombinations(combinationsToCheck);
}

function september() {
    const combinationsToCheck = [49, 50, 51, 52, 53, 54];
    return createCombinations(combinationsToCheck);
}

function october() {
    const combinationsToCheck = [55, 56, 57, 58, 59, 60];
    return createCombinations(combinationsToCheck);
}

function november() {
    const combinationsToCheck = [61, 62, 63, 64, 65, 66];
    return createCombinations(combinationsToCheck);
}

function december() {
    const combinationsToCheck = [67, 68, 69, 70, 71, 72];
    return createCombinations(combinationsToCheck);
}

class Combination {
    constructor(colors) {
        this.colors = colors; 
    }
}

module.exports = {
    redish,
    yellowish,
    greenish,
    colors,
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
    CMYK2RGB
    // your exported functions or variables
};

