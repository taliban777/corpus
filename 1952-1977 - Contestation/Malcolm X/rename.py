from pathlib import Path
import os

BASE_DIR = Path(r"C:\Users\daniy\OneDrive - King's College London\Documents\PhD\Digital Corpus\1952-1977 - Contestation\Malcolm X")

# Mapping: old filename stem -> new filename stem
# Extensions are preserved automatically.
RENAME_MAP = {
    "MX_1960_Speech_QueensCollege":
        "MX_1960_05_05_Speech_QueensCollege",

    "MX_1961_Debate_BayardRustin":
        "MX_1961_10_30_Debate_BayardRustin",

    "MX_1961_Roundtable_OpenMind":
        "MX_1961_10_15_Roundtable_OpenMind",

    "MX_1961_Speech_HarvardLawForum":
        "MX_1961_03_24_Speech_HarvardLawForum",

    "MX_1962_Speech_YaleLawSchool":
        "MX_1962_10_20_Speech_YaleLawSchool",

    "MX_1963_Speech_ColumbiaUniversity":
        "MX_1963_11_20_Speech_ColumbiaUniversity",

    "MX_1963_Speech_GodsJudgementOfWhiteAmerica":
        "MX_1963_12_04_Speech_GodsJudgementOfWhiteAmerica",

    "MX_1963_Speech_MessageToTheGrassroots":
        "MX_1963_11_10_Speech_MessageToTheGrassroots",

    "MX_1963_Speech_UCBerkeley":
        "MX_1963_10_11_Speech_UCBerkeley",

    "MX_1964_Debate_OxfordUnion":
        "MX_1964_12_03_Debate_OxfordUnion",

    "MX_1964_DeclarationOfIndependence":
        "MX_1964_03_12_DeclarationOfIndependence",

    "MX_1964_Interview_ABSpellman":
        "MX_1964_03_19_Interview_ABSpellman",

    "MX_1964_Interview_MiltonHenry":
        "MX_1964_04_12_Interview_MiltonHenry",

    "MX_1964_Letter_FromMecca":
        "MX_1964_04_20_Letter_FromMecca",

    "MX_1964_Speech_UniversityOfGhana":
        "MX_1964_05_13_Speech_UniversityOfGhana",

    "MX_1964_Interview_RobertPennWarren":
        "MX_1964_06_02_Interview_RobertPennWarren",

    "MX_1964_Speech_OAAUFoundingRally":
        "MX_1964_06_28_Speech_OAAUFoundingRally",

    "MX_1964_Speech_SecondOAAURally":
        "MX_1964_07_05_Speech_SecondOAAURally",

    "MX_1964_Speech_AfricanSummitConference":
        "MX_1964_08_21_Speech_AfricanSummitConference",

    "MX_1964_Speech_SecondAfricanSummit":
        "MX_1964_08_21_Speech_SecondAfricanSummit",

    "MX_1964_Letter_EgyptianGazette":
        "MX_1964_08_25_Letter_EgyptianGazette",

    "MX_1964_Speech_DickGregoryAudubonBallroom":
        "MX_1964_12_13_Speech_DickGregoryAudubonBallroom",

    "MX_1964_Speech_PowerOfAfrica_AudubonBallroom":
        "MX_1964_12_20_Speech_PowerOfAfrica_AudubonBallroom",

    "MX_1964_Speech_IntroducesFannieLouHamer":
        "MX_1964_12_20_Speech_IntroducesFannieLouHamer",

    "MX_1964_Speech_HarvardUniversity":
        "MX_1964_03_18_Speech_HarvardUniversity",

    "MX_1964_VisitFromFBI":
        "MX_1964_02_04_VisitFromFBI",

    "MX_1964_Interview_LesCrane":
        "MX_1964_12_02_Interview_LesCrane",

    "MX_1964_Interview_BerniceBass":
        "MX_1964_12_27_Interview_BerniceBass",

    "MX_1965_Speech_LSE":
        "MX_1965_02_11_Speech_LSE",

    "MX_1965_Speech_AfterFirebombing_FordAuditorium":
        "MX_1965_02_14_Speech_AfterFirebombing_FordAuditorium",

    "MX_1965_Speech_WorldwideRevolution":
        "MX_1965_02_15_Speech_WorldwideRevolution",

    "MX_1965_Speech_WorldProblem":
        "MX_1965_02_16_Speech_WorldProblem",

    "MX_1965_Interview_StanBernard":
        "MX_1965_02_18_Interview_StanBernard",
}

renamed = []
not_found = []
conflicts = []

for old_stem, new_stem in RENAME_MAP.items():
    matches = list(BASE_DIR.rglob(f"{old_stem}.*"))

    if not matches:
        not_found.append(old_stem)
        continue

    for old_path in matches:
        new_path = old_path.with_name(f"{new_stem}{old_path.suffix}")

        if new_path.exists():
            conflicts.append(str(new_path))
            continue

        os.rename(old_path, new_path)
        renamed.append((str(old_path), str(new_path)))

print("\n=== RENAMED FILES ===")
for old_name, new_name in renamed:
    print(f"{old_name} -> {new_name}")

print("\n=== NOT FOUND ===")
for item in not_found:
    print(item)

print("\n=== CONFLICTS (target already exists) ===")
for item in conflicts:
    print(item)

print("\nDone.")
