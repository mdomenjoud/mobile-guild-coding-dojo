## Damage and Health

1. All Characters, when created, have:
    - Health, starting at 1000
    - May be Alive or Dead, starting Alive
2. Characters can attack and Deal Damage to Characters.
    - Damage is subtracted from Health
    - When damage received exceeds current Health, Health becomes 0 and the character dies
    - A Character cannot Deal Damage to itself
    - Default dealt damage are 75 health
3. A Character can Heal themselves.
    - Default healing is at 50 health
    - Dead characters cannot heal

## Levels

1. All characters have a Level, starting at 1
    - A Character cannot have a health above 1000 until they reach level 6, when the maximum increases to 1500
2. When dealing damage:

    - If the target is 5 or more Levels above the attacker, Damage is reduced by 50%
    - If the target is 5 or more Levels below the attacker, Damage is increased by 50%

3. Characters may belong to one or more Factions.
    - Newly created Characters belong to no Faction.
4. A Character may Join or Leave one or more Factions.
5. Players belonging to the same Faction are considered Allies.
    - Allies cannot Deal Damage to one another.
    - Allies can Heal one another and non-allies cannot.

## Magical objects

1. As well as Characters there are also Magical Objects
    - Magical Objects have Health
    - The maximum amount of Health is fixed at the time the object is created
    - When reduced to 0 Health, Magical Objects are Destroyed
    - Magical Objects cannot be Healed by Characters
    - Magical Objects do not belong to Factions; they are neutral
    - Magical objects can be equiped
2. Characters can gain health from a Healing Magical Object.
    * Characters can gain any amount of health from the Object, up to its maximum and theirs
    * Healing Magical Objects cannot deal Damage
3. Characters can deal Damage by using a Magical Weapon.
    * These Magical Objects deal a fixed amount of damage when they are used
    * The amount of damage is fixed at the time the weapon is created
    * Every time the weapon is used, the Health is reduced by 1
    * Magical Weapons cannot give Health to a Character

