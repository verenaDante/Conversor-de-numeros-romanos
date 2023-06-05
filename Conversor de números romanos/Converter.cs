using System;
using System.Collections.Generic;

namespace RomanConverter
{
    public class Converter
    {
        // Dicionário para mapear os algarismos romanos aos seus valores em arábico
        private static Dictionary<char, int> romanToArabic = new Dictionary<char, int>()
        {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };

        // Dicionário para mapear os valores em arábico aos seus algarismos romanos
        private static Dictionary<int, string> arabicToRoman = new Dictionary<int, string>()
        {
            {1, "I"},
            {4, "IV"},
            {5, "V"},
            {9, "IX"},
            {10, "X"},
            {40, "XL"},
            {50, "L"},
            {90, "XC"},
            {100, "C"},
            {400, "CD"},
            {500, "D"},
            {900, "CM"},
            {1000, "M"}
        };

// Método para converter um número arábico para romano
public static string ArabicToRoman(int arabicNumeral)
{
    string result = "";

    // Ordena o dicionário de valores arábicos e algarismos romanos em ordem decrescente
    var orderedSymbols = arabicToRoman.OrderByDescending(x => x.Key);

    // Percorre o dicionário ordenado
    foreach (var entry in orderedSymbols)
    {
        int value = entry.Key;
        string symbol = entry.Value;

        // Enquanto o número arábico for maior ou igual ao valor atual, adiciona o algarismo romano ao resultado
        while (arabicNumeral >= value)
        {
            result += symbol;
            arabicNumeral -= value;
        }
    }

    return result;
}


        // Método para converter um número arábico para romano
        public static string ArabicToRoman(int arabicNumeral)
        {
            string result = "";

            // Percorre o dicionário de valores arábicos e algarismos romanos
            foreach (var entry in arabicToRoman)
            {
                int value = entry.Key;
                string symbol = entry.Value;

                // Enquanto o número arábico for maior ou igual ao valor atual, adiciona o algarismo romano ao resultado
                while (arabicNumeral >= value)
                {
                    result += symbol;
                    arabicNumeral -= value;
                }
            }

            return result;
        }
    }
}
