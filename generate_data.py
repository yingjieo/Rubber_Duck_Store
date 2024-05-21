import csv
import random
from datetime import datetime, timedelta
import json

# Generate data for duckies
NUM_ROWS = 5000

# Create the CSV file
OUTPUT_FILE = "rubber_ducks.csv"

colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Black', 'White', 'Pink']
special_colors = ['Multicolored', 'Gold', 'Silver']
sizes = ['Small', 'Medium', 'Large']
deluxe_sizes = ['XSmall', 'XLarge', 'Jumbo']
materials = ['Rubber', 'Plastic', 'Metal', 'Wood', 'Glass', 'Ceramic']
animals = ['Duck', 'Mouse', 'Lion', 'Horse', 'Owl', 'Eagle', 'Giraffe', 'Cat', 'Dog']
special_animals = ['Dinosaur', 'Phoenix', 'Dragon']
patterns = ['None', 'Polka Dot', 'Striped', 'Glitter', 'Gradient', 'Checkered', 'Floral']
themes = ['Pirate', 'Doctor', 'Wizard', 'Princess', 'Witch', 'Superhero']

# function to calculate durability
# from a score of 1 to 10, with 1 being the least durable and 10 being most durable
def get_durability(material):
    # most fragile
    if material in ['Glass', 'Ceramic']:
        return random.randint(1, 5)
    elif material in ['Metal', 'Wood']:
        return random.randint(3, 7)
    # most durable
    else:
        return random.randint(6, 10)

# function to calculate popularity
# themed ducks with unique colors are the most popular for their appearance
# rubber and plastic ducks are most popular for their durability
# scale of 1 to 5
def get_popularity(material, color, animal, theme):
    is_unique = theme in themes
    is_colorful = color in special_colors
    is_duck = animal == "Duck"
    is_special_animal = animal in special_animals
    is_durable = get_durability(material) > 7

    values_list = [is_unique, is_colorful, is_duck, is_special_animal, is_durable]

    base_score =  2 + random.uniform(-0.5, 0.5) # generate some random base popularity

    # add a bit of noise to the score
    added_score = sum(list(map(lambda x: 1 + random.uniform(-0.2, 0.2) if x == True else 0 + random.uniform(-0.2, 0.2),
                    values_list)))
    base_score += added_score
    base_score = round(base_score) # round to nearest int
    base_score = max(base_score, 0) # no negative popularities
    base_score = min(base_score, 5) # no larger than 5

    return base_score

# function to calculate price
# 2 to 40
def get_price(material, color, animal, theme, size):
    price = 0

    # ceramic and glass would be the most expensive, followed by wood and metal
    if material in ['Glass', 'Ceramic']:
        price += 5
    elif material in ['Wood', 'Metal']:
        price += 4
    else:
        price += 2

    # special animals are more expensive
    if animal in special_animals:
        price += 1
    
    # themes are more expensive
    if theme != "Plain":
        price += 1

    # special colors are more expensive
    if color in special_colors:
        price += 2
    
    # deluxe sizes cost more, with jumbo being special
    if size == 'Jumbo':
        price += 5
    elif size in deluxe_sizes:
        price +=2
    
    return price


# Generate data rows
data_rows = []
for i in range(1, NUM_ROWS + 1):
    # Generate random values for each column
    timestamp = datetime.now() - timedelta(seconds=i)
    duck_id = i

    duck_color = random.choice(colors)
    # 20% chance to have a special color
    if (random.random() >= 0.8):
        duck_color = random.choice(special_colors)

    duck_size = random.choice(sizes)
    # 20% chance to have a deluxe size
    if (random.random() >= 0.8):
        duck_size = random.choice(deluxe_sizes)

    duck_material = random.choice(materials)

    duck_animal = random.choice(animals)
    # 20% chance to have a special animal
    if (random.random() >= 0.8):
        duck_animal = random.choice(special_animals)

    duck_pattern = random.choice(patterns)

    duck_theme = "Plain"
    # 50% chance to have a special theme
    if (random.random() >= 0.5):
        duck_theme = random.choice(themes)

    duck_durability = get_durability(duck_material)

    duck_popularity = get_popularity(duck_material, duck_color, duck_animal, duck_theme)

    duck_price = get_price(duck_material, duck_color, duck_animal, duck_theme, duck_size)

    # Create the data row
    data_row = [
        timestamp.strftime("%Y-%m-%d %H:%M:%S"),
        duck_id,
        duck_color,
        duck_size,
        duck_material,
        duck_animal,
        duck_pattern,
        duck_theme,
        duck_durability,
        duck_popularity,
        duck_price
    ]

    # Add the data row to the list
    data_rows.append(data_row)

# Write the data to the CSV file
with open(OUTPUT_FILE, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["timestamp", "duck_id", "color", "size", "material", "animal", "pattern", "theme", "durability", "popularity", "price"]
    )
    writer.writerows(data_rows)

print("Data generation complete.")
