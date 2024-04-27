import 'package:flutter_dotenv/flutter_dotenv.dart';

final API_KEY = dotenv.env['API_KEY'];
final PIXABAY_URL = "https://pixabay.com/api/?key=$API_KEY";
