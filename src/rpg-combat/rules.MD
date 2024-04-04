## Damage and Health

1. All Characters, when created, have:
    * Health, starting at 1000
    * May be Alive or Dead, starting Alive
2. Characters can attack and Deal Damage to Characters.
    * Damage is subtracted from Health
    * When damage received exceeds current Health, Health becomes 0 and the character dies
    * A Character cannot Deal Damage to itself
    * Default dealt damage are 75 health
3. A Character can Heal themselves.
    * Default healing is at 50 health
    * Dead characters cannot heal

## Levels

1. All characters have a Level, starting at 1
    * A Character cannot have a health above 1000 until they reach level 6, when the maximum increases to 1500
2. When dealing damage:
    * If the target is 5 or more Levels above the attacker, Damage is reduced by 50%
    * If the target is 5 or more Levels below the attacker, Damage is increased by 50%