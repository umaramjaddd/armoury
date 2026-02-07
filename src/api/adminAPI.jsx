import { supabase } from "@/Helpers/Supabase";
// Categories
export const getCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*");
  console.log("getCategories:", { data, error });
  if (error) throw error;
  return data;
};

// Add or update category with image upload


export const addCategory = async (category, file) => {
  let imageUrl = null;

  if (file) {
    const fileName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;

    // Upload file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("categories")
      .upload(`images/${fileName}`, file, { upsert: true });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: publicData } = supabase.storage
      .from("categories")
      .getPublicUrl(`images/${fileName}`);

    imageUrl = publicData.publicUrl; // this is the URL to save in your table
  }

  // Insert category with name, description, and image
  const { data, error } = await supabase
    .from("categories")
    .insert([{ ...category, image: imageUrl }])
    .select(); // select returns the inserted row(s)

  if (error) throw error;
  return data;
};


// Update Category
export const updateCategory = async (id, updates, file) => {
  let imageUrl = updates.image || null;

  if (file) {
    // Upload new image (upsert true so it replaces if same path)
    const filePath = `images/${Date.now()}_${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("categories")
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { publicUrl } = supabase.storage.from("categories").getPublicUrl(filePath);
    imageUrl = publicUrl;
  }

  const { data, error } = await supabase
    .from("categories")
    .update({ ...updates, image: imageUrl })
    .eq("id", id);

  if (error) throw error;
  return data;
};

// Delete category
export const deleteCategory = async (id) => {
  // 1. Get the category first to know its image path
  const { data: catData, error: fetchError } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();
  if (fetchError) throw fetchError;

  // 2. Delete image from storage if exists
  if (catData.image) {
    // Extract the file path from the public URL
    // Example: https://PROJECT.supabase.co/storage/v1/object/public/categories/images/123.png
    const url = new URL(catData.image);
    // supabase storage path comes after '/object/' in the URL
    const pathParts = url.pathname.split("/").slice(3); 
    const filePath = pathParts.join("/"); 

    const { error: delError } = await supabase.storage
      .from("categories")
      .remove([filePath]);
    if (delError) console.error("Failed to delete image from storage:", delError);
  }

  // 3. Delete category from database
  const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
};


// Subcategories
export const getSubCategories = async () => {
  const { data, error } = await supabase.from('sub_categories').select('*');
  if (error) throw error;
  return data;
};

export const addSubCategory = async (subCategory) => {
  const { data, error } = await supabase.from('sub_categories').insert([subCategory]);
  if (error) throw error;
  return data;
};

export const updateSubCategory = async (id, updates) => {
  const { data, error } = await supabase.from('sub_categories').update(updates).eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteSubCategory = async (id) => {
  const { data, error } = await supabase.from('sub_categories').delete().eq('id', id);
  if (error) throw error;
  return data;
};

// Products
export const getProducts = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
};

export const addProduct = async (product, file) => {
  let thumbnailUrl = null;
  if (file) {
    const { data, error } = await supabase.storage
      .from('products')
      .upload(`images/${Date.now()}_${file.name}`, file);
    if (error) throw error;
    const { publicURL } = supabase.storage.from('products').getPublicUrl(data.path);
    thumbnailUrl = publicURL;
  }

  const { data, error } = await supabase.from('products').insert([{ ...product, thumbnail: thumbnailUrl }]);
  if (error) throw error;
  return data;
};

export const updateProduct = async (id, updates, file) => {
  let thumbnailUrl = updates.thumbnail;

  if (file) {
    const { data, error } = await supabase.storage
      .from('products')
      .upload(`images/${Date.now()}_${file.name}`, file, { upsert: true });
    if (error) throw error;
    const { publicURL } = supabase.storage.from('products').getPublicUrl(data.path);
    thumbnailUrl = publicURL;
  }

  const { data, error } = await supabase.from('products').update({ ...updates, thumbnail: thumbnailUrl }).eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteProduct = async (id) => {
  const { data, error } = await supabase.from('products').delete().eq('id', id);
  if (error) throw error;
  return data;
};
